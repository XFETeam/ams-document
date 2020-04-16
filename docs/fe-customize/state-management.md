---
title: 状态管理
---

## 状态管理

> 当前文章仅面向`前端开发人员`用于定制代码开发使用。

AMS 在状态管理上使用 Mobx Hook。目前推荐的最佳实践是前端开发人员在绝大多数情况下只在“顶层”
进行 Mobx Store / Mobx Hook 管理，其他组件均以 dumb component 进行编写，不推荐在其他组件
中使用 react useState 等 “[私有状态](https://blog.cloudboost.io/3-reasons-why-i-stopped-using-react-setstate-ab73fc67a42e)” 进行管理。


