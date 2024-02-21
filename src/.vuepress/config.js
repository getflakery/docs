const { description } = require('../../package')

module.exports = {
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3] },
  },
  
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Flakery.dev Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: "/docs/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,

    nav: [
      {
        text: 'Guides',
        link: '/guides/',
      },
      {
        text: 'Concepts',
        link: '/concepts/',
      },
      {
        text: 'Join our Discord!',
        link: 'https://discord.gg/vG2VfJ73HW'
      },
      {
        text: 'Flakery.dev',
        link: 'https://flakery.dev'
      }
    ],
    sidebar: {
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
