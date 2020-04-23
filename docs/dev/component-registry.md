---
title: 组件仓库
---

## 组件仓库

组件仓库好比一个数据源，我们可以通过 `antd` 中获取 `button`，那么 `antd` 
就是作为 `button` 的仓库，而 `button` 则代表组件。那么我们可以通过不同的仓库即可获得不同的组件。目前有以下`组件仓库`：

    html
    antd
    @ant-design/pro-layout
    ams (AMS 内置组件)
    ams/projects/cost-per-buy (AMS 定制项目: 买量后台)

阅读至此，开发者需要大致知道的是：

**1. 所有的仓库名称必须小写。** <br />
**2. 仓库名除了特殊对待的几个以外，其他均与 npm 线上仓库名称一致。**
**3. 仓库 base 代表基础仓库，即 AMS 内部自带的组件仓库**

### 组件仓库 - html

**html 组件仓库用于表示所有原生 html 元素组件集合**，其中所有日常使用的 html 元素如：`div`、`a`、`span` 等。通常来说我们可以进行如下 json 表达，
表达式等效于注释部分：

```json5
// <a></a>
{
  "$$$": "component",
  "registryName": "html",
  "componentName": "a",
  ...
}
```

```json5
// <div></div>
{
  "$$$": "component",
  "registryName": "html",
  "componentName": "div",
  ...
}
```

### 组件仓库 - antd

antd ([ant design](https://ant.design/docs/react/introduce-cn)) 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。AMS 完整的引入了
antd 并能够使用官网上的所有提供的[组件案例](https://ant.design/components/button-cn/)。

**Ant Design**

这是一个最基本的使用[样例](https://ant.design/components/button-cn/)。AMS 可以通过解析以下 json 还原出等效 React JSX 虚拟 dom 等效表达渲染。

```json5
// import { Button } from 'antd';
// <Button type="primary">Primary</Button>
{
  "$$$": "component",
  "registryName": "antd",
  "componentName": "Button",
  "props": {
    "type": "primary"
  },
  "children": [
    "Primary"
  ]
}
```

**Ant Design - Card**

以下例子使用 `Card` 与 `Card.Meta` 的组件嵌套，只要我们能够正确理解 `import { Card } from 'antd'` 引入形式，我们也可以用同样的 json 表
等效表达出来。同样的，AMS 也能够支持 `Card.Meta` 的解析：

```json5
// import { Card } from 'antd';
// ReactDOM.render(
//   <Card
//     hoverable
//     style={{ width: 240 }}
//   >
//     <Card.Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>,
//   mountNode,
// );

{
  "$$$": "component",
  "registryName": "antd",
  "componentName": "Card",
  "props": {
    "hoverable": true,
    "style": {
      "width": 240
    }
  },
  "children": [
    {
      "$$$": "component",
      "registryName": "antd",
      "componentName": "Card.Meta",
      "props": {
        "title": "Europe Street beat",
        "description": "www.instagram.com"
      }
    }
  ]
}
```

### 组件仓库 - @ant-design/pro-layout

具体使用方式请参考：[https://prolayout.ant.design/](https://prolayout.ant.design/)

### 组件仓库 - ams

文档待补全。
