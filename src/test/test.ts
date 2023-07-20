import {PetpetModel} from "../core/model/petpet-model";
import {encodeGif, gifSetting} from "../core/gif-synthesis/encoder";
import {Setting} from "../app/setting/setting";

const baseUrl = './osu' as string
const avatarUrl = './avatar.jpg' as string
const font: FontFace = new FontFace('Aller-Bold', 'url(./Aller-Bold.ttf)') as FontFace

(async () => {
    // @ts-ignore
    await document.fonts.add(await font.load())
    const setting = new Setting(gifSetting)
    document.body.appendChild(setting.render())

    const template = await fetch(baseUrl + '/data.json').then(p => p.json())
    const petpet = new PetpetModel(template, baseUrl)

    const viewer = await petpet.generate({
        to: await fetch(avatarUrl).then(p => p.blob())
    })
    await viewer.play()
    document.body.appendChild(viewer.canvas)

    const viewerSetting = new Setting(viewer.settingObject as any)
    document.body.appendChild(viewerSetting.render())

    const blob = await encodeGif(await viewer.getTextedFrames(), viewer.delay)

    const img = new Image()
    img.src = URL.createObjectURL(blob)
    document.body.appendChild(img)
})()