# UnoPim User Guide

You can find the online version of the UnoPim documentation at [https://docs.unopim.com](https://docs.unopim.com).

## Versions

- **v2.0** — Latest documentation covering AI Agent, Magic AI (Platforms, Prompts, System Prompts, Settings), Dashboard, Notifications, Webhooks, Swatch Attributes, Product Completeness, Translations, and all core PIM features.
- **v1.0** — Legacy documentation covering core PIM functionality.

## Project Structure

```
src/
├── 1.0/                    # v1.0 documentation
├── 2.0/                    # v2.0 documentation
│   ├── introduction/       # Introduction & feature overview
│   ├── releases/           # Key Features by Version (interactive)
│   ├── dashboard/          # Dashboard widgets & analytics
│   ├── products/           # Simple & Configurable products
│   ├── category/           # Categories
│   ├── categoryField/      # Category fields
│   ├── attribute/          # Attributes, families, groups, swatch types
│   ├── data-transfer/      # Import, Export, Job Tracker
│   ├── settings/           # Locales, Currencies, Channels, Users, Roles, Webhooks
│   ├── notifications/      # In-app & email notifications
│   ├── configuration/      # Integrations, Magic AI configuration
│   ├── magic/              # Magic AI content & image generation
│   └── ai-agent/           # AI Agent Chat, Approval Queue, Analytics
├── public/                 # Static assets (images, logos)
└── index.md                # Homepage
```

## Contribution Guide

For contributing to the docs, you first need to set up the project:

1. Fork the repository.
2. Clone your fork.
3. Follow the [Install Dependencies](#install-dependencies) section.

Make sure your PR follows these points:

- Before writing docs, check if the topic is already covered.
- Ensure proper markdown indentation. You can install a markdown linter to follow conventions.
- New filenames should be `kebab-case` (e.g., `file-name.md`).
- Images go in `src/public/assets/{version}/images/{section}/`.

## Install Dependencies

```sh
npm install
```

## Development

Run the docs locally:

```sh
npm run dev
```

Open your browser and go to [http://localhost:8080](http://localhost:8080).

## Build

Build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Tech Stack

- [VitePress](https://vitepress.dev/) v1.6.4
- [Vue.js](https://vuejs.org/) v3.5
- Node.js v20+
