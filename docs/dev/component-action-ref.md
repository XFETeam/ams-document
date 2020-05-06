---
title: 组件 ActionRef
---

## 组件 ActionRef

由于有部分组件通过 `react ref` (ref: 引用) 的方式进行 `内部组件 actions` 的暴露, AMS 利用这样的机制提供了一个
参数 `actionRef` 该部分提供了 `react ref` 的组件进行再次暴露处理, 当使用 `actionRef` 后开发者可以
使用该组件暴露的所有 `ref` 属性.

留意例子中的 `actionRef: true`

```js
{
  $$$: 'component',
  registryName: 'antd',
  componentName: 'Form',
  actionRef: true,
  props: {
    key: "Form-c1a56ccb",
    labelCol: {span: 6},
    wrapperCol: {span: 14},
    onFinish: {
      $$$: 'function',
      registryName: 'ams',
      functionName: 'debug',
      args: [
        '$$$0'
      ]
    }
  },
  children: [
    ...
  ]
}
```

当标记了 `actionRef: true` 后, 开发者可以使用如下 [actions](https://ant.design/components/form-cn/#FormInstance):

| 名称 | 说明 | 类型 |
| --- | --- | --- |
| getFieldValue | 获取对应字段名的值 | (name: [NamePath](#NamePath)) => any |
| getFieldsValue | 获取一组字段名对应的值，会按照对应结构返回 | (nameList?: [NamePath](#NamePath)[], filterFunc?: (meta: { touched: boolean, validating: boolean }) => boolean) => any |
| getFieldError | 获取对应字段名的错误信息 | (name: [NamePath](#NamePath)) => string[] |
| getFieldsError | 获取一组字段名对应的错误信息，返回为数组形式 | (nameList?: [NamePath](#NamePath)[]) => FieldError[] |
| isFieldTouched | 检查对应字段是否被用户操作过 | (name: [NamePath](#NamePath)) => boolean |
| isFieldsTouched | 检查一组字段是否被用户操作过，`allTouched` 为 `true` 时检查是否所有字段都被操作过 | (nameList?: [NamePath](#NamePath)[], allTouched?: boolean) => boolean |
| isFieldValidating | 检查一组字段是否正在校验 | (name: [NamePath](#NamePath)) => boolean |
| resetFields | 重置一组字段到 `initialValues` | (fields?: [NamePath](#NamePath)[]) => void |
| scrollToField | 滚动到对应字段位置 | (name: [NamePath](#NamePath), options: [[ScrollOptions](https://github.com/stipsan/scroll-into-view-if-needed/blob/ece40bd9143f48caf4b99503425ecb16b0ad8249/src/types.ts#L10)]) => void |
| setFields | 设置一组字段状态 | (fields: [FieldData](#FieldData)[]) => void |
| setFieldsValue | 设置表单的值 | (values) => void |
| submit | 提交表单，与点击 `submit` 按钮效果相同 | () => void |
| validateFields | 触发表单验证 | (nameList?: [NamePath](#NamePath)[]) => Promise |

## ActionRef 调用

沿用上面 Form 的例子, 当我们需要提交表单时, 我们可以通过下面方式对 `antd Form` key 为 `Form-c1a56ccb` 为进行调用:

```js
{
  $$$: 'component',
  registryName: 'antd',
  componentName: 'Button',
  props: {
    onClick: {
      $$$: 'function',
      registryName: 'ams',
      functionName: 'triggerAction',
      args: ['Form-c1a56ccb', 'submit'],
    }
  }
}
```

** 注: triggerAction 将在后续章节详细说明 **


## 常见需设置 actionRef 组件

  * antd Form
