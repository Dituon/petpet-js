# petpet-js

## [Demo](https://dituon.github.io/petpet-js/)

https://dituon.github.io/petpet-js/

## Intro

对我另一个 [Java后端项目](https://github.com/Dituon/petpet) 的前端实现,
模板引用自 [Petpet](https://github.com/Dituon/petpet)

项目结构

```text
.
├── src
│   ├── core
│   ├── app
│   └── test
├── editor
├── data
├── index.json
├── config.js
├── vite.config.js
└── package.json
```

- `src`
    - `core`: 程序核心
    - `app`: 前端页面
    - `test`: 核心测试
- `editor`: 模板编辑器
- `data`: 模板数据
- `index.json`: 模板数据索引
- `config.js`: 网站默认配置

## Config

可修改 `/config.js` 或直接在 `URL` 中携带 `GET` 参数

| key        | type                                                                                                                                             | description                                      |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| `server`   | `string[]` `URL[]`                                                                                                                               | URL中 使用 `,` 分割多个参数                               |
| `lang`     | [`"en-US"`](https://datatracker.ietf.org/doc/html/rfc5646) [`navigator.language`](https://developer.mozilla.org/docs/Web/API/Navigator/language) | 支持语言参见 [`/src/app/lang`](/src/app/lang/index.ts) |
| `template` | `string`                                                                                                                                         | 默认模板                                             |

##### Examples

> - `https://d2n.moe/petpet-js?server=https%3A%2F%2Fexample.com%2petpet`
>
> 从 `https://example.com/petpet` 导入模板 (`encodeURIComponent`)

> - `https://d2n.moe/petpet-js?lang=zh-CN&template=osu`
> 
> 程序语言为 `zh-CN`(简体中文), 默认模板为 `osu`

## Deploy

1. `git clone`
2. `npm i`
3. `npm run build`

## Quick Start

### Core

传入模板与背景构造

```javascript
import {PetpetModel} from '/src/core'

const backgroundUrl = '/background.png' // 背景路径
const avatarUrl = '/avatar.png' // 头像路径, 支持GIF

const template = {
    type: 'IMG',
    avatar: [{
        type: 'TO',
        pos: [0, 0, 100, 100] //XYWH
    }]
}

const backgroundImg = new Image() // 创建背景元素
backgroundImg.src = backgroundUrl

// 实例化模板对象, 传入背景列表
const petpetModel = new PetpetModel(template, [backgroundImg])

// 获取预览对象 (异步方法)
const viewer = await petpet.generate({
    to: await fetch(avatarUrl).then(p => p.blob()) // 传入头像Blob, type与模板中对应
})

document.body.appendChild(viewer.canvas) // 添加预览画布
viewer.play() // 开始播放预览
```

读取现有模板

```javascript
import {PetpetModel} from '/core'

const baseUrl = '/data/moe.d2n.petpet-js/tightly' // 模板目录
const templateUrl = baseUrl + '/data.json' // 模板JSON文件路径

const template = await fetch(templateUrl).then(p => p.json()) // 读取模板

// 实例化模板对象, 传入背景路径
// 程序会自动读取此路径下的 0.png, 1.png, 2.png...
const petpetModel = new PetpetModel(template, baseUrl)

// 获取头像Blob, 同上
const avatarBlob = await fetch('/avatar.gif').then(p => p.blob())

// 获取预览对象
const viewer = await petpet.generate({
    to: avatarBlob
})

document.body.appendChild(viewer.canvas) // 添加预览画布
viewer.play() // 开始播放预览
```

保存图片

```javascript
import {encodeGif} from '/src/core'

viewer.play() // 播放预览以缓存动画帧

// 获取渲染缓存后的所有动画帧
const frames = await viewer.getTextedFrames()

const blob = await encodeGif(frames, viewer.delay) // 合成GIF, 获取Blob

// 将GIF添加到网页
const img = new Image()
img.src = URL.createObjectURL(blob)
document.body.appendChild(img)
```

### App

1. 在网页目录部署Petpet生产环境

    ```shell
    git clone -b gh-pages https://github.com/Dituon/petpet-js.git
    ```

2. 在网页上集成Petpet仅需将一行代码插入到 `HTML` 中

    ```html
    <script async type="text/javascript" src="/petpet/inject.js"></script>
    ```

3. 可设置悬浮窗样式

    ```css
    :root {
        --petpet-icon-size: 4em;  /*悬浮窗图标尺寸*/
        --petpet-body-width: 30em;  /*弹窗宽度*/
        /* --petpet-icon-right: 8px; --petpet-icon-top: 8px; */
    }
    ```

## TODO

- [ ] 补充 `README`
- [x] `Avatar.fit`
- [x] `Text.*`
- [x] 优化前端页面

## Keywords

- Typescript
- WebGL
- WebCodecs