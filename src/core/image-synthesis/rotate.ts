export function rotateImage(avatarImage: HTMLCanvasElement, angle: number): HTMLCanvasElement {
    const sin = Math.abs(Math.sin((angle * Math.PI) / 180))
    const cos = Math.abs(Math.cos((angle * Math.PI) / 180))
    const w = avatarImage.width
    const h = avatarImage.height
    const neww = Math.floor(w * cos + h * sin)
    const newh = Math.floor(h * cos + w * sin)

    const rotated = document.createElement('canvas')
    const ctx = rotated.getContext('2d')

    rotated.width = neww
    rotated.height = newh

    ctx.translate(neww / 2, newh / 2)
    ctx.rotate((angle * Math.PI) / 180)
    ctx.drawImage(avatarImage, -w / 2, -h / 2)

    return rotated
}
