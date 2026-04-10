---
outline: deep
---

# Runtime API Examples

This page shows how to work with some of the built-in runtime APIs that VitePress
exposes when building your PaperBeam site.

The `useData()` composable is one of the most useful — it lets you pull in live site,
theme, and page data directly inside any `.md` or `.vue` file:

```md

import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()


## Live Output

### Theme Data
{{ theme }}

### Page Data
{{ page }}

### Page Frontmatter
{{ frontmatter }}
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Live Output

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## Want to Learn More?

Browse the official VitePress docs for the [complete runtime API reference](https://vitepress.dev/reference/runtime-api#usedata).