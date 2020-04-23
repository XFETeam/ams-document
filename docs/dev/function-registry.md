---
title: 函数仓库
---

## 函数仓库

与`组件仓库`类似，`函数仓库`提供了让函数分类的组织形式，最终能够让 JSON 对一个函数进行完整描述。
目前 AMS 在前期仅提供以下`函数仓库`:

    antd
    ams

与`组件仓库`规范一致，函数仓库需要注意：

**1. 所有的仓库名称必须小写。** <br />
**2. 仓库名除了特殊对待的几个以外，其他均与 npm 线上仓库名称一致。**

## 函数转换为 json 原理

我们常见的函数通常表述如下：
```javascript
/**
 * 延迟等待
 * @param {number} milliseconds - 毫秒
 */
export const delay = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
```

我们不难发现的是，`delay`能够进一步表述为以下调用形式
```javascript
delay.apply(null, [<milliseconds>]);
```

`delay` 为函数名，我们仍需定义一个函数仓库用于管理一系列的函数所属，即：`registryName='ams'`。 `[<milliseconds>]` 为传入参数，这时我们已经可以使用 json 进行进一步的转换表达：
```json5
//export const delay = (milliseconds: number) => {
//  return new Promise((resolve) => setTimeout(resolve, milliseconds));
//};
// delay(1000);
{
  "$$$": "function",
  "reigstryName": "ams",
  "functionName": "delay",
  "args": [
    1000 /* 1秒 */
  ]
}
```


### 函数仓库 - antd

详细请参考 antd ([ant design](https://ant.design/docs/react/introduce-cn))。为了避免读者对 antd 用法表示迷茫，
我们提供以下用例便于读者理解。首先我们找到一个 antd 提供的全局实例方法，如：[message](https://ant.design/components/message-cn/):

```json
// import { message } from 'antd';
// message.info('This is a normal message');

{
  "$$$": "function",
  "reigstryName": "antd",
  "functionName": "message",
  "args": [
    "This is a normal message"
  ]
}
```

### 函数仓库 - ams

文档待补全。
