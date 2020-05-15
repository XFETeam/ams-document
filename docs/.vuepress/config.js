module.exports = {
  title: 'AMS 使用文档',
  description: '一个基于 JSON 动态解析微前端中后台前端/设计解决方案',
  base: '/ams-document/',
  markdown: {
    lineNumbers: true
  },
  extraWatchFiles: [
    '../contents/**/*.js'
  ],
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
      /* 定制项目 */ require('../customize-projects/config'),
      /* 常见问题 */ require('../faq/config'),
      /* 持续开发 */ require('../continuous-development/config'),
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
