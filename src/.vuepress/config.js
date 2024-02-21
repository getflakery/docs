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
        text: 'Flakery.dev',
        link: 'https://flakery.dev'
      },
      {
        text: 'Join our Discord!',
        link: 'https://discord.gg/vG2VfJ73HW'
      },

    ],
    displayAllHeaders: true, // Default: false

    sidebar: [
      {
        title: "Guides",
        path: "/guides/",
        children: [
          {
            title: "Getting Started",
            children: [
              {
                title: "Quick Start",
                path: "/guides/quick-start/",
    
              },
    
              {
                title: "Create a NixOS Flake and Deploy it on Flakery",
                path: "/guides/create-flake-and-deploy-it-on-flakery/",
              },
              {
                title: "Adding Flakery to an Existing NixOS Configuration",
                path: "/guides/adding-flakery-to-an-existing-nixos-configuration/"
              },
              {
                title: "Using the Flakery Nix Flake Template",
                path: "/guides/nix-flake-template/"
              },
            ]
          },
          {
            title: "Create a Deployment",
            children: [
              {
                title: "Create a Github Repo and Deploy Your Flake on Flakery",
                path: "/guides/create-git-deploy-flakery/"
              },
              {
                title: "Deploy a Go Web Server on Flakery",
                path: "/guides/deploy-go-webserver/"
              }
            ]
          },
          {
            title: "Connect to a Deployment",
            children: [
              {
                title: "Connect to a Deployment With SSH",
                path: "/guides/connect-ssh/"
              },
            ]
          }
        ]
      }
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
