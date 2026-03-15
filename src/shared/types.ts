export enum RequestType {
    Chat = 'chat',
    Memory = 'memory',
    Emotion = 'emotion',
    Translate = 'translate',
    Other = 'other',
    Unknown = 'unknown',
}

export interface PluginParameters {
    frequency_penalty?: number
    presence_penalty?: number
    repetition_penalty?: number
    min_p?: number
    top_k?: number
    top_p?: number
    temperature?: number
    max_tokens?: number
}

/** Acvus template configuration for message pre/post processing */
export interface TemplateConfig {
    /** Acvus template applied to system messages before sending */
    system_template?: string
    /** Acvus template applied to user messages before sending */
    user_template?: string
    /** Acvus template applied to format the final output */
    output_template?: string
    /** Whether template processing is enabled */
    enabled?: boolean
}

export interface ModelParameters extends PluginParameters {
    thinking_level?: 'low' | 'medium' | 'high'
    thinking_tokens?: number
    media_resolution?: 'media_resolution_low' | 'media_resolution_medium' | 'media_resolution_high'
    stop_sequences?: string[]
    use_stream?: boolean
    active_tools?: ('google_search' | 'googleMaps' | 'url_context' | 'code_execution')[]
    seed?: number
    /** Acvus template configuration */
    templates?: TemplateConfig
}