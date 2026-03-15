# Risu GCA

A [RisuAI](https://risuai.net) plugin that integrates **Google's Gemini Code Assist API** as a chat completion provider. Authenticate with your Google account and use Gemini models directly in your RisuAI chats.

## Features

- **Gemini Chat Provider** — Registers as a provider in RisuAI, supporting both streaming and non-streaming responses.
- **Google OAuth2 Authentication** — Secure login flow with automatic token refresh and session management.
- **Model Selection** — Choose from available Gemini models (Gemini 3 Pro/Flash, Gemini 2.5 Pro/Flash/Flash-Lite) and configure parameters per request type (Chat, Memory, Emotion, Translate, Other).
- **Tool Support** — Enable Google Search, Google Maps, URL context, and code execution tools per request.
- **Acvus Template Engine** — Built-in template engine for pre/post-processing messages with filters, pattern matching, iteration, and 50+ built-in functions.
- **Settings UI** — In-app modal for authentication, model configuration, parameter tuning, and backup/restore of settings.
- **Auto-Onboarding** — Automatically provisions a Gemini Code Assist project and manages privacy settings on first use.

## Tech Stack

- [Svelte 4](https://svelte.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 3](https://tailwindcss.com) (scoped to plugin container)
- [Vite 5](https://vitejs.dev) (builds to a single UMD bundle)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18+)
- [npm](https://www.npmjs.com)

### Install Dependencies

```sh
npm install
```

### Build

```sh
npm run build
```

This generates a single `dist/risu-gca.js` file containing all code and styles.

### Install in RisuAI

Import the built `dist/risu-gca.js` file into RisuAI as a plugin.

## Project Structure

```
src/
├── main.ts            # Plugin entry point
├── plugin.ts          # Plugin metadata and argument definitions
├── api.ts             # RisuAI API interface
├── acvus/             # Acvus template engine (lexer, parser, evaluator)
├── auth/              # Google OAuth2 authentication
├── chat/              # Chat request handling, formatting, streaming
├── gca/               # Gemini Code Assist project management
├── model/             # Model selection and parameter storage
├── shared/            # Shared types, utilities, logging, events, backup
└── ui/                # Svelte UI components (modal, settings, popup)
```

## License

This project is licensed under the **MIT License**.
