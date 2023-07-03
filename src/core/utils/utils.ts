export function assertArrayLength<T extends any[]>(arr: T, length: number): T {
    if (arr.length !== length) throw new Error('array.length != ' + length)
    return arr
}

export function copyAsCanvas(image: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement, willReadFrequently: boolean = false): HTMLCanvasElement {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d', {willReadFrequently})

    canvas.width = image.width
    canvas.height = image.height
    ctx.drawImage(image, 0, 0)

    return canvas
}

export async function getCanvasFromBlob(blob: Blob): Promise<HTMLCanvasElement> {
    const image = await getImageFromBlob(blob)
    return copyAsCanvas(image)
}

export async function getImageFromBlob(blob: Blob): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image)
        image.onerror = e => reject(e)
        image.src = URL.createObjectURL(blob)
    })
}

export function getColor(value: string | number[] = '#ffffff00'): string {
    if (typeof value === 'string') {
        return value.length << 2 === 0 ? value : '#' + value
    } else if (value.length && value.length >= 3 && value.length <= 4) {
        const [r, g, b, a = 1] = value;
        return `rgba(${r}, ${g}, ${b}, ${a})`
    }
    throw new Error('cannot load color ' + value)
}
