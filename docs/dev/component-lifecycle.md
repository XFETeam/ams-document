---
title: 组件生命周期
---

## 生命周期

react 提供了一个完善的生命周期机制，而在日常业务开发中，我们往往可以借助如 `componentDidMount` （组件挂载） 进行如 “数据拉取”， `componentWillUnmount` （组件卸载） 进行如事件销毁等操作。
目前 AMS 也提供致敬 react 2个生命周期：

  componentDidMount
  componentWillUnmount

**最佳实践：请尽可能在页面顶层使用生命周期进行如异步请求的操作， 这将有利于组件状态之间的管理**

### 组件挂载/组件卸载

在组件初始化完并渲染到页面时，componentDidMount 将被执行。以下为基本用法：

```javascript
class Card extends React.Component {
  componentDidMount() {
    // ...
  }
  componentWillUnmount() {
    // ...
  }
  render() {
    // ...
  }
}
```

```json5
{
  "registryName": "antd",
  "componentName": "Card",
  "lifecycle": {
    "componentDidMount": {
       // ...
    },
    "componentWillUnmount": {
       // ...
    }
  },
  "props": {
    // ...
  }
}
```


实战用例： 在组件加载时获取用户信息，在组件卸载时加入埋点统计。

```json5
{
  "registryName": "html",
  "componentName": "div",
  "lifecycle": {
    "componentDidMount": {
       "$$$": "function",
       "registryName": "base",
       "componentName": "ajax",
       "args": [
         {
           "url": "//xxx.com/api/get-user-info-by-id",
           "method": "get",
           "params": {
             "userId": "aa6d7719-1914-4ad0-96a0-5b500ad6426c"
           }
         }
       ]
    },
    "componentWillUnmount": {
       "$$$": "function",
       "registryName": "base",
       "componentName": "ajax",
       "args": [
         {
           "url": "//xxx.com/api/track",
           "method": "get"
         }
       ]
    }
  },
  "props": {
    // ...
  }
}
```
