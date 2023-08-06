import {AvatarData, AvatarModelList, AvatarTemplate, ExtraTemplate} from "./avatar-model";
import {BackgroundModel, BackgroundTemplate} from "./background-model";
import {copyAsCanvas} from "../utils/utils";
import {TextModelList, TextTemplate} from "./text-model";

export enum PetpetType {
    IMG = 'IMG',
    GIF = 'GIF'
}

export interface PetpetTemplate {
    type: PetpetType
    avatar: AvatarTemplate[]
    text: TextTemplate[]
    background?: BackgroundTemplate
    delay?: number
    alias?: string[]
    inRandomList?: boolean
    reverse?: boolean
    hidden?: boolean
}

export const defaultPetpetTemplate: PetpetTemplate = {
    type: undefined,
    avatar: [],
    text: [],
    background: null,
    delay: 65,
    alias: [],
    inRandomList: true,
    reverse: false,
    hidden: false
}

export class PetpetModel {
    readonly type: PetpetType
    protected template: PetpetTemplate
    private initPromise: Promise<void>
    protected avatarList: AvatarModelList
    protected backgroundModel: BackgroundModel
    textModelList: TextModelList
    backgroundLength: number

    constructor(template: PetpetTemplate, background?: HTMLImageElement[] | HTMLCanvasElement[] | string) {
        this.template = {...defaultPetpetTemplate, ...template}
        this.type = template.type
        this.textModelList = TextModelList.createFrom(this.template.text)
        this.backgroundModel = new BackgroundModel(this.template.background)
        if (background) this.background = background
        this.initPromise = this.init()
    }

    set background(background: HTMLImageElement[] | HTMLCanvasElement[] | string) {
        if (typeof background === 'string') {
            this.backgroundModel.setUrl(background, this.backgroundLength)
        } else if (Array.isArray(background)) {
            this.backgroundModel.images = background
        } else {
            throw new Error('unknown background', background)
        }
    }

    private async init() {

    }

    async generate(avatarData: AvatarData, extraTemplates?: ExtraTemplate) {
        const avatars = AvatarModelList.createFrom(this.template.avatar, avatarData, extraTemplates)
        const avatarSizeMap = await avatars.getSizeMap()

        const backgrounds = await this.backgroundModel.generate(avatarSizeMap)
        return new PetpetModelViewer(this.template, backgrounds, avatars, this.textModelList)
    }
}

export class PetpetModelViewer {
    readonly template: PetpetTemplate
    readonly canvas: HTMLCanvasElement
    private readonly ctx: CanvasRenderingContext2D
    private readonly backgrounds: HTMLImageElement[] | HTMLCanvasElement[]
    private readonly avatars: AvatarModelList
    private readonly texts: TextModelList

    private length: number
    private intervalId: number;
    private readonly initPromise: Promise<void>

    private userDelay: number = undefined
    private i: number = 0
    private framesCache: HTMLCanvasElement[] = []
    private resolveFramesCachedPromise: () => void
    private framesCachedPromise: Promise<void> = new Promise(res => this.resolveFramesCachedPromise = res)

    private prevTextCacheCount: number
    private prevTextedFramesCache: HTMLCanvasElement[]

    constructor(
        template: PetpetTemplate,
        backgrounds: HTMLImageElement[] | HTMLCanvasElement[],
        avatars: AvatarModelList,
        texts: TextModelList
    ) {
        const canvas = document.createElement('canvas')
        this.canvas = canvas
        canvas.width = backgrounds[0].width
        canvas.height = backgrounds[0].height
        this.ctx = canvas.getContext('2d')
        this.template = template
        this.backgrounds = backgrounds
        this.avatars = avatars
        this.texts = texts
        this.texts.setCacheArea(canvas.width, canvas.height)

        this.initPromise = this.init()
    }

    async init() {
        const {posLength, frameLength = this.backgrounds.length} = await this.avatars.getMaxLength()
        this.length = this.template.type === PetpetType.IMG ? frameLength : this.backgrounds.length
    }

    async replay(){
        this.i = 0
        await this.play()
        return new Promise(res => setTimeout(res, this.delay * this.length))
    }

    async play() {
        await this.stop()
        if (this.template.reverse) return this.playReverse()
        this.intervalId = setInterval(async () => {
            await this.drawAvatarsCache(this.i++ % this.length)
            this.drawTextsCache()
        }, Math.abs(this.delay))
    }

    private playReverse() {
        this.intervalId = setInterval(async () => {
            await this.drawAvatarsCache(this.length - 1 - (this.i++ % this.length))
            this.drawTextsCache()
        }, Math.abs(this.delay))
    }

    async stop() {
        await this.initPromise
        clearInterval(this.intervalId)
    }

    set delay(ms: number) {
        if (!ms) {
            this.stop()
            return
        }

        this.userDelay = ms
        if (ms > 0) {
            this.play()
        } else {
            this.stop().then(() => this.playReverse())
        }
    }

    get delay() {
        return this.userDelay || this.template.delay
    }

    private getBackground(index) {
        return index < this.backgrounds.length ? this.backgrounds[index] : this.backgrounds.at(-1)
    }

    async getFrames() {
        await this.framesCachedPromise
        return this.framesCache
    }

    async getTextedFrames() {
        const frames = await this.getFrames()
        if (this.texts.texts.length === 0) return frames

        if (this.prevTextCacheCount === this.texts.cacheCount) return this.prevTextedFramesCache

        this.prevTextedFramesCache = frames.map(frame => {
            const f = copyAsCanvas(frame)
            const ctx = f.getContext('2d')
            ctx.drawImage(this.texts.cacheCanvas, 0, 0)
            return f
        })
        this.prevTextCacheCount = this.texts.cacheCount
        return this.prevTextedFramesCache
    }

    private drawTextsCache() {
        this.ctx.drawImage(this.texts.cacheCanvas, 0, 0)
    }

    private drawTexts() {
        this.texts.draw(this.ctx)
    }

    private async drawAvatarsCache(index) {
        if (this.framesCache[index]) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(this.framesCache[index], 0, 0)
            return
        }
        await this.drawAvatars(index)
        this.framesCache[index] = copyAsCanvas(this.canvas, true)
        if (this.framesCache.length === this.length) this.resolveFramesCachedPromise()
    }

    private async drawAvatars(index) {
        await this.initPromise
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for (const a of this.avatars.bottomAvatars) await a.draw(this.ctx, index)
        this.ctx.drawImage(this.getBackground(index), 0, 0)
        for (const a of this.avatars.topAvatars) await a.draw(this.ctx, index)
    }

    get settingObject() {
        const that = this
        return this.length === 1 ? {} : {
            set delay(ms: number) {
                that.delay = ms
            },
            get delay(): number {
                return that.delay
            },
            play: () => this.play(),
            stop: () => this.stop()
        }
    }

    async destroy() {
        await this.stop()
        this.canvas.remove()
    }
}