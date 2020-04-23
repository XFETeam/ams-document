---
title: 内置接口 API
---

## 内置接口 API

由于内置了一个简单的[使用流程](./internal-routes), 那么针对这系列流程 AMS 也定义了一些基本 API 方可正常使用. 后面对内置接口 API 的描述将通过路由进行划分.

## 1. 选择项目 (路径: /)

```javascript
// 接口: /project-list
// 用途: 拉取项目列表, 并用于展示内容
// 期望数据结构:
{
  "开发测试系统": {
    "logo": "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",
    "description": "希望是一个好东西，也许是最好的，好东西是不会消亡的",
    "createAt": "2020-04-17",
    "member": "艾伦",
    "init": {
      "baseApiUrl": "/api/components/",
      "baseApiInitUrl": "/api/components/get-custom-layout-config"
    }
  },
  "西山居官网活动系统": {
    "logo": "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
    "description": "那是一种内在的东西，他们到达不了，也无法触及的",
    "createAt": "2017-07-24",
    "member": "科学搬砖组",
    "init": {
      "baseApiUrl": "http://172.18.120.33:7788/",
      "baseApiInitUrl": "http://172.18.120.33:7788/app/admin/base/rbac/user/init-config"
    }
  },
}
```

## 2. 开发环境登录 (路径: /login)

```javascript
// 接口: /project-list
// 用途: 拉取项目列表, 并用于展示内容
// 期望数据结构:
{
  "开发测试系统": {
    "logo": "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",
    "description": "希望是一个好东西，也许是最好的，好东西是不会消亡的",
    "createAt": "2020-04-17",
    "member": "艾伦",
    "init": {
      "baseApiUrl": "/api/components/",
      "baseApiInitUrl": "/api/components/get-custom-layout-config"
    }
  },
  "西山居官网活动系统": {
    "logo": "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
    "description": "那是一种内在的东西，他们到达不了，也无法触及的",
    "createAt": "2017-07-24",
    "member": "科学搬砖组",
    "init": {
      "baseApiUrl": "http://172.18.120.33:7788/",
      "baseApiInitUrl": "http://172.18.120.33:7788/app/admin/base/rbac/user/init-config"
    }
  },
}
```
