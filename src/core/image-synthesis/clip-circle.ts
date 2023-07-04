import {useGL} from "../utils/gl-utils"
// @ts-ignore
import shaderSource from './clip-circle.glsl?raw'

export function clipCircleImage(image: HTMLImageElement | HTMLCanvasElement): HTMLCanvasElement {
    const canvas = document.createElement('canvas')
    // const gl = canvas.getContext('webgl')
    //
    // if (gl) return useGL(shaderSource, image, gl)

    const ctx = canvas.getContext('2d')

    const radius = Math.min(image.width, image.height) / 2

    canvas.width = radius * 2
    canvas.height = radius * 2

    ctx.save()
    ctx.beginPath()
    ctx.arc(radius, radius, radius, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(image, radius - image.width / 2, radius - image.height / 2)
    ctx.restore()

    return canvas
}
