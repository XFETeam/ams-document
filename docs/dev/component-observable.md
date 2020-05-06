---
title: 组件 observable
---

## 组件 observable

AMS 内部目前默认将所有组件都转换成了 `mobx` 的 `可被观测` 的组件, 通过这样的转换使用者可以直接通过 action 的方式
更新组件 "props" 并使 `组件自动响应式`. 最常见的例子是我们可以通过更新一个 modal 弹窗 的 `visible` 属性来
实现 `打开 modal` 的这么常用行为.

```js
  {
    $$$: 'component',
    registryName: 'antd',
    componentName: 'Modal',
    props: {
      visible: true,
      title: 'Basic Modal'
    }
  }
```

## 禁用组件 observable

在有一些情况下, 我们不可以将组件转换成 `observable`, 这是因为有一些 `react` 组件在最初设计时存在 `父子` 关系. 常见的例子有
`antd` 中的 `Select` 和 `Select.Option`. 由于 `Select` 必须使用 `Select.Option` 作为其 `children`, 所以当我们把
`Select.Option` 转换成 `observable` 时, `Select` 将无法知晓其 `children` 类型为 `Select.Option`, `antd` 将通过报错的形式
提醒开发者必须使用 `Select.Option`. 此时, AMS 下建议对于这类型组件我们应该 `禁用组件 observable`.

禁用方式需要在 JSON 组件声明时标记 `observable: false`:

```js
  {
    $$$: 'component',
    registryName: 'antd',
    componentName: 'Modal',
    observable: false,
    props: {
      visible: true,
      title: 'Basic Modal'
    }
  }
```


## 常见的禁用

  * 对于使用 `Antd Form` 表单时候, `Form` 的 `children`, 如: `Select`, `Checkbox`, `Radio.Group` 等全部都可以直接设置 `observable: false`.
