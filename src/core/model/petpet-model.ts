import {AvatarData, AvatarModelList, AvatarTemplate} from "./avatar-model";
import {BackgroundModel, BackgroundTemplate} from "./background-model";
import {copyAsCanvas} from "../utils/utils";

export enum PetpetType {
    IMG = 'IMG',
    GIF = 'GIF'
}

export interface PetpetTemplate {
    type: PetpetType
    avatar: AvatarTemplate[]
    text: object[]
    background?: BackgroundTemplate
    delay?: number
    alias?: string[]
    inRandomList?: boolean
    reverse?: boolean
    hidden?: boolean

    key?: string,
    url?: string
}

const defaultPetpetTemplate: PetpetTemplate = {
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

    constructor(template: PetpetTemplate, background?: HTMLImageElement[] | HTMLCanvasElement[] | string) {
        this.template = {...defaultPetpetTemplate, ...template}
        this.type = template.type
        this.backgroundModel = new BackgroundModel(this.template.background)
        if (background) this.background = background
        this.initPromise = this.init()
    }

    set background(background: HTMLImageElement[] | HTMLCanvasElement[] | string) {
        if (typeof background === 'string') {
            this.backgroundModel.url = background
        } else if (Array.isArray(background)) {
            this.backgroundModel.images = background
        } else {
            throw new Error('unknown background', background)
        }
    }

    private async init() {

    }

    async generate(avatarData: AvatarData) {
        const avatars = AvatarModelList.createFrom(this.template.avatar, avatarData)
        const avatarSizeMap = await avatars.getSizeMap()

        const backgrounds = await this.backgroundModel.generate(avatarSizeMap)
        return new PetpetModelViewer(this.template, backgrounds, avatars)
    }
}

export class PetpetModelViewer {
    readonly template: PetpetTemplate
    readonly canvas: HTMLCanvasElement
    private readonly ctx: CanvasRenderingContext2D
    private readonly backgrounds: HTMLImageElement[] | HTMLCanvasElement[]
    private readonly avatars: AvatarModelList

    private length: number
    private intervalId: number;
    private readonly initPromise: Promise<void>

    private userDelay: number = undefined
    private i: number = 0
    private framesCache: HTMLCanvasElement[] = []
    private resolveFramesPromise: () => void
    private framesCachedPromise: Promise<void> = new Promise(res => this.resolveFramesPromise = res)

    constructor(
        template: PetpetTemplate,
        backgrounds: HTMLImageElement[] | HTMLCanvasElement[],
        avatars: AvatarModelList
    ) {
        const canvas = document.createElement('canvas')
        this.canvas = canvas
        canvas.width = backgrounds[0].width
        canvas.height = backgrounds[0].height
        this.ctx = canvas.getContext('2d')
        this.template = template
        this.backgrounds = backgrounds
        this.avatars = avatars
        this.initPromise = this.init()
    }

    async init() {
        const {posLength, frameLength} = await this.avatars.getMaxLength()
        this.length = this.template.type === PetpetType.IMG ? frameLength : posLength
    }

    async play() {
        await this.stop()
        if (this.template.reverse) return this.playReverse()
        this.intervalId = setInterval(() => {
            this.drawCache(this.i++ % this.length)
        }, this.userDelay ?? this.template.delay)
    }

    private playReverse() {
        this.intervalId = setInterval(() => {
            this.drawCache(this.length - this.i++ % this.length)
        }, this.delay)
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

        this.userDelay = Math.abs(ms)
        if (ms > 0) {
            this.stop().then(() => this.play())
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

    private async drawCache(index) {
        if (this.framesCache[index]) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(this.framesCache[index], 0, 0)
            return
        }
        await this.draw(index)
        this.framesCache[index] = copyAsCanvas(this.canvas, true)
        if (this.framesCache.length === this.length) this.resolveFramesPromise()
    }

    private async draw(index) {
        await this.initPromise
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for (const a of this.avatars.bottomAvatars) await a.draw(this.ctx, index)
        this.ctx.drawImage(this.getBackground(index), 0, 0)
        for (const a of this.avatars.topAvatars) await a.draw(this.ctx, index)
    }

    get settingObject() {
        const cls = this
        return {
            set delay(ms: number) {
                cls.delay = ms
            },
            get delay(): number {
                return cls.delay
            },
            play: () => cls.play(),
            stop: () => cls.stop()
        }
    }
}