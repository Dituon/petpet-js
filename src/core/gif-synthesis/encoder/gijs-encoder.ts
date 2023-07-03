import GIF from '@dhdbstjr98/gif.js'

export const gifSetting = {
    workers: 2,
    quality: 10,
    background: '#ffffff',
    dither: false
}

export async function encodeGif(frames: HTMLCanvasElement[], delay: number): Promise<Blob> {
    const gif = new GIF(gifSetting)

    frames.forEach(frame => gif.addFrame(frame, {delay}))

    return new Promise((resolve) => {
        gif.on('finished', resolve)
        gif.render()
    })
}