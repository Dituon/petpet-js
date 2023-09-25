# Petpet Editor

基于 **Petpet 5.4** 标准的在线编辑器

## Data Upload

不需要文件上传功能可跳过此章节

编辑器为纯静态页面, 文件上传功能基于 **Github OAuth App**, 实现原理如下:

1. 用户登录 Github 账户, 授予网站账户操作权限
2. Fork 模板仓库 [`Dituon/petpet-data`](https://github.com/Dituon/petpet-data)
3. 将编辑器生成的文件推送至仓库, 由 `Github Action` 自动构建索引

由于纯静态页面会泄露 [**Github OAuth App** `client_secret`](https://github.com/settings/applications), 且受限于 `CORS` 策略; 需要服务端进行反向代理, 详见 (`./api`)[./api]

服务端基于 (**Cloudflare Workers**)[https://developers.cloudflare.com/workers/] 实现, 并由 `Github Action` 自动部署, 可轻松改写为本地代理

为防止 `client_secret` 泄露, 可配置 `Repository Setting/Actions/Repository secrets` 隐藏敏感数据

| 名称               | 来源                                                                                                     | 描述                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `CF_ACCOUNT_ID`    | (Cloudflare Account ID)[https://developers.cloudflare.com/fundamentals/setup/find-account-and-zone-ids/] | 用于 Action 自动部署, 手动部署或本地代理可忽略                                            |
| `CF_API_TOKEN`     | (Workers API Token)[https://dash.cloudflare.com/profile/api-tokens]                                      | 用于 Action 自动部署, 手动部署或本地代理可忽略                                            |
| `GH_CLIENT_ID`     | (Github OAuth App)[https://github.com/settings/developers]                                               | 用于用户登录程序, 可直接更改 (`github-oauth-config.json`)[./api/github-oauth-config.json] |
| `GH_CLIENT_SECRET` | (Github OAuth App)[https://github.com/settings/developers]                                               | 用于认证用户登录, 可直接更改 (`github-oauth-config.json`)[./api/github-oauth-config.json] |

详细部署步骤见下文

## Deploy

不需要文件上传功能可跳过此章节

#### Cloudflare Workers

1. 新增Worker路由, 命名为 `github-app-oauth`, 或更改 (`wrangler.toml/name`)[./api/wrangler.toml], 可选手动部署 (`./api`)[./api] 中的脚本
2. 将路由部署于 `/github/oauth` 路径, 或更改程序配置文件
3. 设置环境变量 `CF_ACCOUNT_ID` `CF_API_TOKEN`

#### Github OAuth App

1. 创建 (Github OAuth 应用)[https://github.com/settings/developers]
2. 设置环境变量 `GH_CLIENT_ID` `GH_CLIENT_SECRET`

#### Github Action

重新运行 `Action/Deploy Editor API`

## TODO

- [ ] Upload
- [ ] 支持文本变量