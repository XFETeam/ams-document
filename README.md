# AMS (Activity Management System) Document [![Build Status](https://travis-ci.com/XFETeam/ams-document.svg?branch=master)](https://travis-ci.com/XFETeam/ams-document)

> AMS 是一个基于 JSON 动态解析微前端中后台前端/设计解决方案, 当前仓库用于记录 AMS 相关文档使用。

## Demo

[https://xfeteam.github.io/ams-document/](https://xfeteam.github.io/ams-document/)

## AMS 是什么？

AMS 是一个基于 JSON 动态解析微前端中后台前端/设计解决方案。我们基于优秀的 Ant Design + Ant Design Pro 进行二次开发。
ASM 可以使用 JSON 描述一个完整的 UI 界面。其提供的基础组件是微小颗粒化的。正因此，开发人员可以利用“组件化”的思路进行
从“基础组件”到“业务组件”，从“业务组件”到“物料区块”，从“物料区块”到“页面”的完整开发，致力于在设计规范和基础组件的基础上，
继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。

## 面向用户

AMS 主要面向『后端开发』和『前端开发』使用。得力于 JSON 的通用格式设计，『后端开发』在大部分场景下无需依赖『前端开发』亦可
约 80% ~ 90% 的开发工作。这样的独立性核心目的是致力于减少前后端开发过程中的沟通成本，减少前后端开发交付流程，最终提高整个生产力。
『前端开发』除了提供基础的组件以外，『前端开发』应该利用 AMS 进行更多的上层业务封装，提供让后端无需二开、开箱即用的开发体验。

## 技术

AMS 底层主要使用到以下开发技术：

```bash
react 16.8+ 
antd pro
antd 4.0
mobx 6 (mobx hook) 
react hook
typescript
umi@3
```

## 贡献

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/XFETeam/ams-document)

- Fork it!
- 创建新的分支: `git checkout -b my-new-feature`
- 提交你的变更: `git commit -am 'Add some feature'`
- 推送分支: `git push origin my-new-feature`
- 提交一个 PR (pull request)

## LICENSE

[MIT](https://github.com/umijs/umi/blob/master/LICENSE)
