module.exports = {
  title: 'AMS 使用文档',
  description: 'AMS 使用文档',
  base: '/ams-document/',
  plugins: [
    [
      '@vuepress/search', {
      searchMaxSuggestions: 10
    }
    ],
    '@vuepress/back-to-top'
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    docsDir: 'docs',
    repo: 'XFETeam/ams-document',
    repoLabel: '文档来源',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑这篇文档',
    lastUpdated: '最后更新时间：',
    sidebar: [
      /* 介绍 */ require('../intro/config'),
      /* 开发 */ require('../dev/config'),
    ],
    // Service Worker 的配置
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    },
    nav: []
  }
};
