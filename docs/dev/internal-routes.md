---
title: 内置路由
---

## 内置路由

目前内部提供几个内置路由方便日常使用:

| 路由                    | 路径                       |  例子                                                     |       
| --------               | :-----                     |  ---------                                                |   
| 选择项目                | / 或 /select-projects      | https://${hostname}/ams/#/ 或 https://${hostname}/ams/#/select-projects  |
| 内置登录页 (仅开发环境)  | /login                     | https://${hostname}/ams/?project-name=开发测试系统#/login  |
| 自定义路由              | /custom                    | http://${hostname}/ams/?project-name=开发测试系统#/custom  |
| 其他 (404)              | 在没有命中上述路由时        | https://${hostname}/ams/#/404  |     


## 常规流程

1. 打开项目地址, 如 `https://${hostname}/ams/`, 此时将需要选择项目, 选择其一即可.
2. 在开发环境时, 会自动进入 `https://${hostname}/ams/?project-name=开发测试系统#/login`, 根据相应项目输入账号密码即可. 在正式环境时请使用 kingsoft koa 账号进行授权登录 
3. 登录完成后会自动跳转并进入对应系统 http://${hostname}/ams/?project-name=开发测试系统#/custom, 此时用户可以选择侧边栏进行使用.
