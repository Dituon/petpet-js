import * as fx from 'glfx-es6'
// import '../utils/virtual-webgl.js'

export async function deformImage(canvas: HTMLCanvasElement, image: HTMLCanvasElement, pos: number[][]): Promise<number> {
    let [x1, y1] = pos[0]
    let [x2, y2] = pos[1]
    let [x3, y3] = pos[2]
    let [x4, y4] = pos[3]
    const [xAnchor, yAnchor] = pos[4]

    x1 += xAnchor
    x2 += xAnchor
    x3 += xAnchor
    x4 += xAnchor
    y1 += yAnchor
    y2 += yAnchor
    y3 += yAnchor
    y4 += yAnchor

    const fxCanvas = fx.canvas(canvas)
    const texture = fxCanvas.texture(image)

    fxCanvas.draw(texture).perspective(
        [0, 0, image.width, 0, 0, image.height, image.width, image.height],
        [x1, y1, x4, y4, x2, y2, x3, y3]
    ).update()
    texture.destroy()
    return new Promise(requestAnimationFrame)
}