# Video Integration 🎬

## Overview
PaperBeam makes it easy to embed and manage video content directly inside your markdown pages.
Whether you're adding product demos, tutorials, or background content, this guide covers
everything you need to deliver a smooth video experience to your readers.

## Embedding Your First Video
Adding a video to any PaperBeam page is straightforward. Drop the following HTML block
directly into your markdown file and point it at your video file:

```html
<video controls width="100%" poster="/images/thumbnail.jpg">
  <source src="/videos/demo.mp4" type="video/mp4">
  <source src="/videos/demo.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

::: tip
Including a `poster` attribute gives your video a thumbnail image before the user hits play.
It makes the page look much more polished.
:::

## Supported Formats

PaperBeam supports all major web video formats. MP4 is the safest choice for broad
browser compatibility.

| Format | Streaming | Browser Support | Recommended Use |
|--------|-----------|-----------------|-----------------|
| MP4 | ✅ | Universal | General purpose, best default |
| WebM | ✅ | Most modern browsers | Smaller file sizes |
| MOV | ✅ | Safari focused | Apple ecosystem content |
| OGG | ⚠️ | Limited | Legacy support only |

## Controlling Playback with JavaScript
For more dynamic experiences, you can control video playback programmatically.
This is useful for auto-playing background videos or building custom player controls:

```js
const video = document.querySelector('video')

// Mute first — required for autoplay to work in browsers
video.muted = true
video.loop = true
video.autoplay = true

// Pause when the user scrolls past the video
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) video.pause()
    else video.play()
  })
})

observer.observe(video)
```

::: warning Autoplay Rules
Browsers block autoplay on videos with sound. Always set `muted = true` before
calling `video.play()` or autoplay will silently fail.
:::

## Layout Tips with Flextext
PaperBeam's Flextext system pairs especially well with video content. Try placing
a video alongside a text column for editorial-style layouts that keep readers engaged
without overwhelming the page.

## Performance Best Practices 🚀

- **Use lazy loading** — add `loading="lazy"` to defer off-screen videos and keep initial load times fast
- **Compress before uploading** — aim for the smallest file size that still looks good
- **Stay under 2GB per file** — larger files cause buffering and slow down the whole page
- **Use a CDN for large libraries** — serving videos from a content delivery network dramatically improves load speed globally
- **Always provide captions** — accessibility matters, and captions improve SEO too

::: info Hosting Tip
For large video libraries, consider hosting on an external platform like Vimeo or
Cloudflare Stream and embedding via `<iframe>` instead of serving files directly.
:::