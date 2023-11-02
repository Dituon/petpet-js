import {BaseGlfxRenderer, Texture} from "./base-glfx-renderer";
import {AvatarFilter} from "../model";

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
    DENOISE = "DENOISE"
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

export interface AvatarHueFilter {
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

export const defaultAvatarHueFilter: AvatarHueFilter = {
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

export function getDefaultFilter(type: AvatarFilterType): AvatarFilter {
    switch (type) {
        case AvatarFilterType.SWIRL:
            return { ...defaultAvatarSwirlFilter }
        case AvatarFilterType.BULGE:
            return { ...defaultAvatarBulgeFilter }
        case AvatarFilterType.SWIM:
            return { ...defaultAvatarSwimFilter }
        case AvatarFilterType.BLUR:
            return { ...defaultAvatarBlurFilter }
        case AvatarFilterType.CONTRAST:
            return { ...defaultAvatarContrastFilter }
        case AvatarFilterType.HSB:
            return { ...defaultAvatarHueFilter }
        case AvatarFilterType.HALFTONE:
            return { ...defaultAvatarHalftoneFilter }
        case AvatarFilterType.DOT_SCREEN:
            return { ...defaultAvatarDotScreenFilter }
        case AvatarFilterType.NOISE:
            return { ...defaultAvatarNoiseFilter }
        case AvatarFilterType.DENOISE:
            return { ...defaultAvatarDenoiseFilter }
        default:
            throw new Error('Invalid AvatarFilterType')
    }
}

export class ImageFilterRenderer extends BaseGlfxRenderer {
    protected centerX = 0.5
    protected centerY = 0.5

    constructor(cache: boolean = true) {
        super(cache)
    }

    build(image: HTMLCanvasElement, filters: AvatarFilter[]): HTMLCanvasElement {
        if (!filters?.length) return image

        const texture: Texture = this.getTexture(image)

        const canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        const ctx = canvas.getContext('2d')

        const iCentreX = image.width / 2
        const iCentreY = image.height / 2
        const iRadius = Math.min(iCentreX, iCentreY)

        this.fxCanvas.draw(texture)

        for (const filter of filters) {
            switch (filter.type) {
                case AvatarFilterType.SWIRL:
                    this.fxCanvas.swirl(
                        iCentreX,
                        iCentreY,
                        filter.radius || iRadius,
                        filter.angle || 3
                    )
                    break
                case AvatarFilterType.BULGE:
                    this.fxCanvas.bulgePinch(
                        iCentreX,
                        iCentreY,
                        filter.radius || iRadius,
                        filter.strength || 0.5
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
                        filter.brightness || 0,
                        filter.contrast || 0
                    )
                    break
                case AvatarFilterType.HSB:
                    this.fxCanvas.hueSaturation(
                        filter.hue || 0,
                        filter.saturation || 0
                    )
                    break
                case AvatarFilterType.HALFTONE:
                    this.fxCanvas.colorHalftone(
                        iCentreX,
                        iCentreY,
                        filter.angle || 0,
                        filter.radius || 4
                    )
                    break
                case AvatarFilterType.DOT_SCREEN:
                    this.fxCanvas.dotScreen(
                        iCentreX,
                        iCentreY,
                        filter.angle || 0,
                        filter.radius || 4
                    )
                    break
                case AvatarFilterType.NOISE:
                    this.fxCanvas.noise(filter.amount || 0.25)
                    break
                case AvatarFilterType.DENOISE:
                    this.fxCanvas.denoise(filter.exponent || 20)
                    break
                case AvatarFilterType.OIL:
                    this.fxCanvas.oil(filter.skip, filter.levels, filter.range)
                    break
                default:
                    console.warn(`Unknown filter type`, filter)
            }
        }

        this.fxCanvas.update()
        ctx.drawImage(this.fxCanvas, 0, 0)
        return canvas
    }
}
