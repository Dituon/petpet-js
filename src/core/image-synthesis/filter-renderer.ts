import {BaseGlfxRenderer, Texture} from "./base-glfx-renderer";
import {AvatarFilter} from "../model";
import {copyAsCanvas} from "../utils/utils";

export enum AvatarFilterType {
    SWIRL = "SWIRL",
    BULGE = "BULGE",
    SWIM = "SWIM",
    BLUR = "BLUR",
    CONTRAST = "CONTRAST",
    HSB = "HSB",
    HALFTONE = "HALFTONE",
    DOT_SCREEN = "DOT_SCREEN",
    NOISE = "NOISE",
    DENOISE = "DENOISE",
    OIL = "OIL"
}

export interface AvatarFilterNameMap {
    "SWIRL": AvatarSwirlFilter
    "BULGE": AvatarBulgeFilter
    "SWIM": AvatarSwimFilter
    "BLUR": AvatarBlurFilter
    "CONTRAST": AvatarContrastFilter
    "HSB": AvatarHSBFilter
    "HALFTONE": AvatarHalftoneFilter
    "DOT_SCREEN": AvatarDotScreenFilter
    "NOISE": AvatarNoiseFilter
    "DENOISE": AvatarDenoiseFilter
    "OIL": AvatarOilFilter
}

export interface AvatarSwirlFilter {
    type: AvatarFilterType.SWIRL
    radius: number
    angle: number

    x: number
    y: number
}

export interface AvatarBulgeFilter {
    type: AvatarFilterType.BULGE
    radius: number
    strength: number

    x: number
    y: number
}

export interface AvatarBlurFilter {
    type: AvatarFilterType.BLUR
    radius: number
}

export interface AvatarSwimFilter {
    type: AvatarFilterType.SWIM
    scale: number
    stretch: number
    angle: number
    amount: number
    turbulence: number
    time: number
}

export interface AvatarContrastFilter {
    type: AvatarFilterType.CONTRAST
    brightness: number
    contrast: number
}

export interface AvatarHSBFilter {
    type: AvatarFilterType.HSB
    hue: number
    saturation: number
    brightness: number
}

export interface AvatarHalftoneFilter {
    type: AvatarFilterType.HALFTONE
    angle: number
    radius: number

    x: number
    y: number
}

export interface AvatarDotScreenFilter {
    type: AvatarFilterType.DOT_SCREEN
    angle: number
    radius: number

    x: number
    y: number
}

export interface AvatarNoiseFilter {
    type: AvatarFilterType.NOISE
    amount: number
}

export interface AvatarDenoiseFilter {
    type: AvatarFilterType.DENOISE
    exponent: number
}

export interface AvatarOilFilter {
    type: AvatarFilterType.OIL
    skip: number
    levels: number
    range: number
}

export const defaultAvatarSwirlFilter: AvatarSwirlFilter = {
    type: AvatarFilterType.SWIRL,
    radius: 0,
    angle: 3,
    x: 0.5,
    y: 0.5
}

export const defaultAvatarBulgeFilter: AvatarBulgeFilter = {
    type: AvatarFilterType.BULGE,
    radius: 0,
    strength: 0.5,
    x: 0.5,
    y: 0.5
}

export const defaultAvatarSwimFilter: AvatarSwimFilter = {
    type: AvatarFilterType.SWIM,
    scale: 32,
    stretch: 1,
    angle: 0,
    amount: 10,
    turbulence: 1,
    time: 0
}

export const defaultAvatarBlurFilter: AvatarBlurFilter = {
    type: AvatarFilterType.BLUR,
    radius: 10
}

export const defaultAvatarContrastFilter: AvatarContrastFilter = {
    type: AvatarFilterType.CONTRAST,
    brightness: 0,
    contrast: 0
}

export const defaultAvatarHSBFilter: AvatarHSBFilter = {
    type: AvatarFilterType.HSB,
    hue: 0,
    saturation: 0,
    brightness: 0
}

export const defaultAvatarHalftoneFilter: AvatarHalftoneFilter = {
    type: AvatarFilterType.HALFTONE,
    angle: 0,
    radius: 4,
    x: 0.5,
    y: 0.5
}

export const defaultAvatarDotScreenFilter: AvatarDotScreenFilter = {
    type: AvatarFilterType.DOT_SCREEN,
    angle: 0,
    radius: 4,
    x: 0.5,
    y: 0.5
}

export const defaultAvatarNoiseFilter: AvatarNoiseFilter = {
    type: AvatarFilterType.NOISE,
    amount: 0.25
}

export const defaultAvatarDenoiseFilter: AvatarDenoiseFilter = {
    type: AvatarFilterType.DENOISE,
    exponent: 20
}

export const defaultAvatarOilFilter: AvatarOilFilter = {
    type: AvatarFilterType.OIL,
    skip: 4,
    levels: 8,
    range: 12
}

const filterMap: Record<keyof AvatarFilterNameMap, AvatarFilterNameMap[keyof AvatarFilterNameMap]> = {
    SWIRL: defaultAvatarSwirlFilter,
    BULGE: defaultAvatarBulgeFilter,
    SWIM: defaultAvatarSwimFilter,
    BLUR: defaultAvatarBlurFilter,
    CONTRAST: defaultAvatarContrastFilter,
    HSB: defaultAvatarHSBFilter,
    HALFTONE: defaultAvatarHalftoneFilter,
    DOT_SCREEN: defaultAvatarDotScreenFilter,
    NOISE: defaultAvatarNoiseFilter,
    DENOISE: defaultAvatarDenoiseFilter,
    OIL: defaultAvatarOilFilter
}

export function getDefaultFilter<K extends keyof AvatarFilterNameMap>(type: K): AvatarFilterNameMap[K] {
    // @ts-ignore
    return {...filterMap[type]}
}

export class ImageFilterRenderer extends BaseGlfxRenderer {
    protected nowImageEle: HTMLCanvasElement | HTMLImageElement
    protected nowTexture: Texture

    protected centerX = 0.5
    protected centerY = 0.5

    constructor(cache: boolean = true) {
        super(cache)
    }

    texture(image: HTMLCanvasElement | HTMLImageElement): this {
        this.nowImageEle = image
        if (!this.nowTexture) {
            this.nowTexture = this.getTexture(this.nowImageEle)
        } else {
            this.nowTexture.loadContentsOf(image)
        }
        this.fxCanvas.draw(this.nowTexture)
        return this
    }

    apply(filters: AvatarFilter[]): this {
        // if (!filters?.length) return this

        this.fxCanvas.draw(this.nowTexture)
        const iCentreX = this.nowImageEle.width / 2
        const iCentreY = this.nowImageEle.height / 2
        const iRadius = Math.min(iCentreX, iCentreY)

        for (let filter of filters) {
            filter = {...getDefaultFilter(filter.type), ...filter}
            switch (filter.type) {
                case AvatarFilterType.SWIRL:
                    this.fxCanvas.swirl(
                        iCentreX,
                        iCentreY,
                        filter.radius || iRadius,
                        filter.angle
                    )
                    break
                case AvatarFilterType.BULGE:
                    this.fxCanvas.bulgePinch(
                        iCentreX,
                        iCentreY,
                        filter.radius || iRadius,
                        filter.strength
                    )
                    break
                case AvatarFilterType.SWIM:
                    this.fxCanvas.swim(
                        filter.scale,
                        filter.stretch,
                        filter.angle,
                        filter.amount,
                        filter.turbulence,
                        filter.time
                    )
                    break
                case AvatarFilterType.BLUR:
                    this.fxCanvas.triangleBlur(filter.radius || 10)
                    break
                case AvatarFilterType.CONTRAST:
                    this.fxCanvas.brightnessContrast(
                        filter.brightness,
                        filter.contrast
                    )
                    break
                case AvatarFilterType.HSB:
                    this.fxCanvas.hueSaturation(
                        filter.hue,
                        filter.saturation
                    )
                    break
                case AvatarFilterType.HALFTONE:
                    this.fxCanvas.colorHalftone(
                        iCentreX,
                        iCentreY,
                        filter.angle,
                        filter.radius * 2.828
                    )
                    break
                case AvatarFilterType.DOT_SCREEN:
                    this.fxCanvas.dotScreen(
                        iCentreX,
                        iCentreY,
                        filter.angle,
                        filter.radius * 2.828
                    )
                    break
                case AvatarFilterType.NOISE:
                    this.fxCanvas.noise(filter.amount)
                    break
                case AvatarFilterType.DENOISE:
                    this.fxCanvas.denoise(filter.exponent)
                    break
                case AvatarFilterType.OIL:
                    this.fxCanvas.oil(filter.skip, filter.levels, filter.range)
                    break
                default:
                    console.warn(`Unknown filter type`, filter)
            }
        }

        this.fxCanvas.update()
        return this
    }

    build(image: HTMLCanvasElement | HTMLImageElement, filters: AvatarFilter[]): HTMLCanvasElement {
        if (!filters?.length) return image as HTMLCanvasElement
        this.texture(image).apply(filters)
        return copyAsCanvas(this.fxCanvas)
    }
}