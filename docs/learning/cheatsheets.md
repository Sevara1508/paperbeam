# Cheatsheets 📋

## Your Quick Reference Guide ✨
Everything you need to work efficiently in PaperBeam — right at your fingertips.
No more digging through docs for the basics.

### Everyday Tasks
These are the actions you'll reach for most often when building and maintaining your site:

- 📄 **Create a new page** — add a `.md` file anywhere in your project folder
- ✏️ **Edit existing content** — open any markdown file and start typing
- 👀 **Preview your changes** — run the dev server and check `localhost:5173`
- 🚀 **Publish updates** — build the site and deploy to your hosting platform
- 🗂️ **Organize pages** — move files into subfolders to create URL paths
- 🎨 **Customize styles** — edit `custom.css` inside `.vitepress/theme/`

### Full Task Reference

| Task | How To Do It | Notes |
|------|-------------|-------|
| Create a page | Add a `.md` file to your project | File name becomes the URL |
| Edit content | Open the file and save changes | Auto-reloads in the browser |
| Preview site | Run `npm run docs:dev` | Live at `localhost:5173` |
| Add to navbar | Update `config.js` nav array | Supports dropdowns |
| Add to sidebar | Update `config.js` sidebar array | Supports sections |
| Build for production | Run `npm run docs:build` | Output goes to `.vitepress/dist` |

### Markdown Quick Reference

| Element | Syntax |
|---------|--------|
| Heading 1 | `# Title` |
| Heading 2 | `## Section` |
| Bold | `**bold text**` |
| Italic | `*italic text*` |
| Link | `[text](url)` |
| Code inline | `` `code` `` |

::: tip Pro Tip
Keep this page bookmarked while building your site — it saves a lot of back-and-forth
with the full documentation.
:::

::: warning Don't forget
Always restart the dev server after making changes to `config.js`. Content changes
hot-reload automatically, but config changes do not.
:::