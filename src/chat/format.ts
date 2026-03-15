import type { OpenAIChat } from "../api"
import type { GeminiChat, GeminiPart, GeminiResponse } from "./types";
import type { TemplateConfig } from "../shared/types";
import { evaluate } from "../acvus";
import type { TemplateContext } from "../acvus";


function parseGeminiRole(role: string): "user" | "model" | "function" {
    switch (role) {
        case 'system':
        case 'user':
            return 'user';
        case 'assistant':
            return 'model';
        case 'function':
            return 'function';
        default:
            return 'user';
    }
}

/**
 * Build acvus template context from the current message and chat state.
 * Context variables use the @name convention from acvus.
 */
function buildTemplateContext(msg: OpenAIChat, messages: OpenAIChat[]): TemplateContext {
    return {
        content: msg.content,
        role: msg.role,
        name: msg.name || '',
        messages: messages.map(m => ({
            role: m.role,
            content: m.content,
            name: m.name || '',
        })),
        message_count: messages.length,
    };
}

/**
 * Apply an acvus template to a message's content.
 * If the template is empty or evaluation fails, returns the original content.
 */
function applyTemplate(template: string | undefined, content: string, context: TemplateContext): string {
    if (!template || !template.trim()) return content;
    const result = evaluate(template, { ...context, input: content });
    return result.error ? content : result.output;
}

export function parseGeminiChat(messages: OpenAIChat[], templates?: TemplateConfig): GeminiChat[] {
    const chats: GeminiChat[] = [];
    const templateEnabled = templates?.enabled === true;

    for (const msg of messages) {
        const role = parseGeminiRole(msg.role);
        let parts: GeminiPart[] = [];
        let lastChat = chats.length > 0 ? chats[chats.length - 1] : null;
        
        if (lastChat && lastChat.role === role) {
            parts = lastChat.parts;
            chats.pop();
        }
        
        let content = msg.content;

        // Apply acvus templates if enabled
        if (templateEnabled) {
            const ctx = buildTemplateContext(msg, messages);
            if (msg.role === 'system') {
                content = applyTemplate(templates.system_template, content, ctx);
            } else if (msg.role === 'user') {
                content = applyTemplate(templates.user_template, content, ctx);
            }
        }

        parts.push({ text: content });

        if (msg.multimodals) {
            for (const modal of msg.multimodals) {
                const dataurl = modal.base64;
                const base64 = dataurl.split(",")[1];
                const mediaType = dataurl.split(";")[0].split(":")[1];
    
                parts.push({
                    inlineData: {
                        mimeType: mediaType,
                        data: base64,
                    }
                });   
            }
        }

        chats.push({ role, parts });
    }
    return chats;
}

export function extractContent(response: GeminiResponse): { content: string, thoughts: string } {
    let content = '';
    let thoughts = '';

    if (response.candidates && response.candidates.length > 0) {
        const candidate = response.candidates[0];
        if (candidate.content && candidate.content.parts) {
            for (const part of candidate.content.parts) {
                if (part.text) {
                    if (part.thought) {
                        thoughts += part.text;
                    } else {
                        content += part.text;
                    }
                }
            }
        }
    }
    return { content, thoughts };
}

export function formatResult(content: string, thoughts: string): string {
    let result = '';
    if (thoughts.trim()) {
        result += `<Thoughts>\n\n${thoughts.trim()}\n\n</Thoughts>\n\n`;
    }
    result += content;
    return result;
}
