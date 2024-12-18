import { defineConfig } from 'vitepress'
import { sidebarData } from './nav'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MyApp Docs",
  description: "A VitePress Doc",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'App', link: 'https://www.google.com' }
    ],

    sidebar: sidebarData,
    outline: { level: [2,3] }, // 選單預設展開三層

    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
})
