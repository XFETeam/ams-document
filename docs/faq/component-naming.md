---
title: 组件命名
---

## 为什么组件用大写开头

JSX 是 React.createElement(component, props, …children) 提供的语法糖，component 的类型是：string/ReactClass type。我们具体看一下在什么情况下会用到 string 类型，什么情况下用到 ReactClass type 类型。

* string 类型 react 会觉得他是一个原生 dom 节点
* ReactClass type 类型 自定义组件

对于小写字符串，就会直接创建 dom 元素，如果 html 并没有这个元素，是创建不出来的。而大字符串传进去的不是一个字符串，是一个组件(其实就是一个对象)，那么就不会直接去创建 dom 元素，还会做其他的处理。

正因为上面原因, 当我们使用 html 元素时, JSON 编写如下:

```json5
{
  $$$: 'component',
  registryName: 'html', // 原生 html 组件仓库
  componentName: 'div', // 注意这里的 div 是小写, 而不是 'Div'
  chidlren: [
    '...'
  ]
}
```

```json5
{
  $$$: 'component',
  registryName: 'antd', // 自定义 React 组件仓库
  componentName: 'Button', // 注意这里的 Button 首字母大写
  chidlren: [
    '...'
  ]
}
```
