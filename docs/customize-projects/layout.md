---
title: 布局
---

## 布局 - Layout

目前 AMS 分别提供 3 种布局: `Custom` `Blank` , 使用时需要携带前缀 `Layout.Custom` `Layout.Blank`

## 布局 - Layout.Custom

Layout.Custom 是有完整的侧边导航和后台完整结构界面的常用布局, 基本使用方式如下

![custom-layout](/ams-document/images/custom-layout.png)

```json5
{
  $$$: 'component',
  registryName: 'ams',
  componentName: 'Layout.Custom',
  props: {
    logo: 'https://test-zt.xoyo.com/allen/Octocat.png',
    title: '开发测试系统',
    sidebar: [
      {
        name: 'Dashboard',
        path: '/?path=/api/components/dashboard',
        icon: {
          $$$: 'component',
          registryName: '@ant-design/icons',
          componentName: 'GithubFilled',
        },
      },
    ],
  },
}
```

#### 布局 - Layout.Custom 默认属性

```json5
CustomLayout.defaultProps = {
  logo,
  title: 'AMS',
  sidebar: [
    {
      name: 'Dashboard',
      path: '/?path=/api/components/dashboard',
      icon: {
        $$$: 'component',
        registryName: '@ant-design/icons',
        componentName: 'GithubFilled',
      },
    }
  ],
};
```

#### 布局 - Layout.Custom Props API

#### props: 

| 属性                    | 类型                       |  例子                                                     |       
| --------               | :-----                     |  ---------                                                |   
| logo                   | string | ReactNode         | https://test-zt.xoyo.com/allen/Octocat.png                |
| title                  | string                     | 开发测试系统                                               |
| sidebar                | Sidebar                    | [{name: 'Dashboard',path: '/?path=/api/components/dashboard',icon: {$$$: 'component',registryName: '@ant-design/icons',componentName: 'GithubFilled'}}]]   |

#### Sidebar

sidebar 是一个**递归型数组**, 它的每一个数组结构如下

```json5
{
  name: 'Dashboard',
  path: '/?path=/api/components/dashboard',
  icon: {
    $$$: 'component',
    registryName: '@ant-design/icons',
    componentName: 'GithubFilled',
  },
  children: [
    name: 'Dashboard',
    path: '/?path=/api/components/dashboard',
    icon: {
      $$$: 'component',
      registryName: '@ant-design/icons',
      componentName: 'GithubFilled',
    },
    children: [
      name: 'Dashboard',
      path: '/?path=/api/components/dashboard',
      icon: {
        $$$: 'component',
        registryName: '@ant-design/icons',
        componentName: 'GithubFilled',
      },
      children: [
        ...
      ]
    ]
  ]
}
```

#### SidebarItem
| 属性                    | 类型                       |  例子                                                     |       
| --------                | :-----                     |  ---------                                                |   
| name                    | string                     | Dashboard                |
| path                    | string                     | /?path=/api/components/dashboard                                               |
| icon                    | ReactNode                  | {$$$: 'component',registryName: '@ant-design/icons',componentName: 'GithubFilled'}   |
| children                | SidebarItem[]              | 参考例子 children 字段 |

## 布局 - Layout.Basic

完全空白的布局, 开发者只能补充相应的 children 即可

![custom-layout](/ams-document/images/blank-layout.png)

```json5
{
  $$$: 'component',
  registryName: 'ams',
  componentName: 'Layout.Blank',
  children: [...]
}
```

#### props: 

| 属性                    | 类型                       |  例子                                                     |       
| --------                | :-----                     |  ---------                                                |   
| children                | any        | 任意类型属性均可                |
