---
title: 函数 TriggerAction
---

## 函数 TriggerAction

根据上一章节 `组件 actionRef`, 我们仍需要一个函数对其进行调用, 该函数我们定义为: `triggerAction`, 函数签名如下:

```ts
export interface ICacheValue {
  registryName: keyof typeof registries;
  componentName: string;
  props: IAnyObject;
  key: string;
  source: IAnyObject;
}

export function triggerAction(
  searchCondition: Partial<ICacheValue> | string,
  actionName: string,
): any;
```

### 例子

点击 `外部刷新 table` 按钮可以通过通信的方式刷新 `Table`

```jsx
import React from 'react';
import parser from '@/utils/parser/react-component-parser';

export default () =>
  parser.parse([
    {
      $$$: 'component',
      registryName: 'antd',
      componentName: 'Button',
      props: {
        type: 'primary',
        onClick: {
          $$$: 'function',
          registryName: 'ams',
          functionName: 'triggerAction',
          args: ['ProTable-faf7f175', 'reload'],
        },
      },
      children: ['外部刷新 table'],
    },
    {
      $$$: 'component',
      registryName: 'ams',
      componentName: 'ProTable',
      props: {
        key: 'ProTable-faf7f175',
        headerTitle: '测试表格',
        query: '/api/rule',
        forms: [
          {
            title: '规则名称',
            dataIndex: 'name',
            rules: [
              {
                required: true,
                message: '规则名称为必填项',
              },
            ],
          },
          {
            title: '描述',
            dataIndex: 'desc',
            valueType: 'textarea',
          },
          {
            title: '服务调用次数',
            dataIndex: 'callNo',
            sorter: true,
          },
          {
            title: '状态',
            dataIndex: 'status',
            valueEnum: {
              0: { text: '关闭', status: 'Default' },
              1: { text: '运行中', status: 'Processing' },
              2: { text: '已上线', status: 'Success' },
              3: { text: '异常', status: 'Error' },
            },
          },
          {
            title: '上次调度时间',
            dataIndex: 'updatedAt',
            sorter: true,
            valueType: 'dateTime',
          },
        ],
        toolBar: [
          {
            $$$: 'component',
            registryName: 'antd',
            componentName: 'Button',
            props: {
              onClick: {
                $$$: 'function',
                registryName: 'window',
                functionName: 'alert',
                args: ['测试'],
              },
            },
          },
        ],
      },
    },
  ]);
```

