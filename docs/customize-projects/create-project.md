---
title: 创建项目 - Create Project
---

## 创建项目 - Create Project

目前创建一个自定义项目需要在(如: 测试分支, 正式分支请自行切换) [/public/project-list.json](https://gitlab.xsjcs.cn/xfe/ams-pro/blob/test/public/project-list.json) 文件中进行添加, 添加的格式如下:

```json
{
  ...
  "开发测试系统": {
    "logo": "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",
    "description": "希望是一个好东西，也许是最好的，好东西是不会消亡的",
    "createAt": "2020-04-17",
    "member": "艾伦",
    "init": {
      "baseApiUrl": "http://dev-trade.xoyo.com:9502",
      "baseApiInitUrl": "http://dev-trade.xoyo.com:9502/cpanel/system/manager/init"
    }
  }
  ...
}
```

  - 开发测试系统 - 必须在 JSON 中唯一, 用于标识项目名称, 方便日后管理
  - logo - 用于标识项目, 通过 logo 的形式便于快速定位和找到该项目, 同时对于部分项目可借助 logo 让用户感觉到其专业性
  - description - 描述, 对项目名称的进一步说明
  - createAt - 创建时间
  - member - 作者, 或者参与者, 用于快速寻找到项目负责人
  - init.baseApiUrl - 项目 api 基础接口, 后续浏览器地址栏中的 path = XXXX (如果 xxx 并非绝对路径的情况下) 将直接拼接到该地址中, 如: http://dev-trade.xoyo.com:9502/XXXX
  - init.baseApiInitUrl - 项目 api 起始接口, 即当进入项目后第一个拉起项目的 api 接口. 使用者可以通过该接口拉取页面的布局接口等组件
