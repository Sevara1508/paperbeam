import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "PaperBeam",
  description: "Elevate Your Content Flow",
  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Products', link: '/products' },
      { text: 'API', link: '/api' },
      {
        text: 'Learning',
        items: [
          { text: 'Documentations', link: '/learning/docs' },
          { text: 'Cheatsheets', link: '/learning/cheatsheets' },
          { text: 'Blog', link: '/learning/blog' },
          { text: 'Videos', link: '/learning/video' }
        ]
      },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Products', link: '/products' },
          { text: 'API', link: '/api' },
          { text: 'Contact', link: '/contact' }
        ]
      },
      {
        text: 'Learning',
        items: [
          { text: 'Documentations', link: '/learning/docs' },
          { text: 'Cheatsheets', link: '/learning/cheatsheets' },
          { text: 'Blog', link: '/learning/blog' },
          { text: 'Videos', link: '/learning/video' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sevara1508/paperbeam/tree/main' }
    ]
  }
})