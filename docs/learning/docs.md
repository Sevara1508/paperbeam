# Documentation 📚

## Welcome to PaperBeam
PaperBeam is a structured content platform built for teams who take publishing seriously.
Whether you're onboarding a new writer or scaling up a content operation, this documentation
will walk you through everything you need to get up and running.

## Getting Started
Before diving in, make sure you have the following ready:

- A modern code editor (VS Code recommended)
- Node.js version 18 or higher installed
- Basic familiarity with Markdown syntax
- A project folder ready to go

## Setup Steps

### 1. 🗂️ Create Your Workspace
Start by initializing your PaperBeam project. This sets up the folder structure,
config file, and default theme so you have a solid foundation to build on.

```bash
npm add -D vitepress
npx vitepress init
```

### 2. ✏️ Add Your Content Pages
Every page in PaperBeam is a Markdown file. Create files in your project folder
and they automatically become pages on your site. Organize them into subfolders
to create clean URL paths like `/learning/docs`.

### 3. 👀 Preview Your Site
Before publishing anything, always preview locally. Run the dev server and open
your browser to check that everything looks right.

```bash
npm run docs:dev
```

### 4. 🚀 Publish and Manage Updates
When you're happy with your content, build the site for production. PaperBeam
compiles everything into a fast, static site ready to deploy anywhere.

```bash
npm run docs:build
```

## Key Concepts

| Concept | Description |
|---------|-------------|
| Pages | Individual `.md` files that become site routes |
| Config | The `config.js` file controls nav, sidebar, and metadata |
| Theme | Controls visual styling and layout of your site |
| Public folder | Stores static assets like images and logos |

::: info New to Markdown?
PaperBeam pages are written in Markdown — a lightweight formatting language.
If you're new to it, check out the Cheatsheets page for a quick syntax reference.
:::

::: tip Best Practice
Keep your content files organized in clearly named folders from the start.
Renaming URLs later can break existing links across your site.
:::