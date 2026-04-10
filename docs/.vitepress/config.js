// Imports the defineConfig helper from VitePress for type safety and autocomplete
import { defineConfig } from 'vitepress'

export default defineConfig({
  // The name that appears in the browser tab and site metadata
  title: "PaperBeam",

  // Short description used for SEO and meta tags
  description: "Elevate Your Content Flow",

  themeConfig: {
    // Logo displayed on the left side of the navbar, served from the /public folder
    logo: '/logo.png',

    // =============================================
    // NAVIGATION BAR
    // Links displayed across the top of every page
    // =============================================
    nav: [
      // Direct link to the Products page
      { text: 'Products', link: '/products' },

      // Direct link to the API reference page
      { text: 'API', link: '/api' },

      // Learning dropdown menu — expands to show 4 subpages
      {
        text: 'Learning',
        items: [
          { text: 'Documentations', link: '/learning/docs' },
          { text: 'Cheatsheets', link: '/learning/cheatsheets' },
          { text: 'Blog', link: '/learning/blog' },
          { text: 'Videos', link: '/learning/video' }
        ]
      },

      // Direct link to the Contact page
      { text: 'Contact', link: '/contact' }
    ],

    // =============================================
    // SIDEBAR
    // Shown on all non-homepage pages on the left
    // Divided into two sections for easy navigation
    // =============================================
    sidebar: [
      {
        // First section — main site pages
        text: 'Overview',
        items: [
          { text: 'Products', link: '/products' },
          { text: 'API', link: '/api' },
          { text: 'Contact', link: '/contact' }
        ]
      },
      {
        // Second section — all learning subpages
        text: 'Learning',
        items: [
          { text: 'Documentations', link: '/learning/docs' },
          { text: 'Cheatsheets', link: '/learning/cheatsheets' },
          { text: 'Blog', link: '/learning/blog' },
          { text: 'Videos', link: '/learning/video' }
        ]
      }
    ],

    // =============================================
    // SOCIAL LINKS
    // Icons displayed on the right side of the navbar
    // =============================================
    socialLinks: [
      // Links to the PaperBeam GitHub repository
      { icon: 'github', link: 'https://github.com/Sevara1508/paperbeam/tree/main' }
    ]
  }
})