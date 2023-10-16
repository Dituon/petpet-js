import {BaseGlfxRenderer, Texture} from "./base-glfx-renderer";
import {AvatarFilter, AvatarFilterType} from "../model";

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
                default:
                    console.warn(`Unknown filter type`, filter)
            }
        }

        this.fxCanvas.update()
        ctx.drawImage(this.fxCanvas, 0, 0)
        return canvas
    }
}
