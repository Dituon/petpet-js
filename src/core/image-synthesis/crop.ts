export function cropImage(
    image: HTMLCanvasElement | HTMLImageElement,
    cropCoordinates: [number, number, number, number] | [number, number],
    usePercentage: boolean = false
): HTMLCanvasElement {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    const [x1, y1, x2, y2] =
        cropCoordinates.length === 2
            ? [0, 0, cropCoordinates[0], cropCoordinates[1]]
            : cropCoordinates

    let w = usePercentage ? ((x2 - x1) / 100) * image.width : (x2 - x1)
    let h = usePercentage ? ((y2 - y1) / 100) * image.height : (y2 - y1)

    canvas.width = usePercentage ? (w / 100) * image.width : w
    canvas.height = usePercentage ? (h / 100) * image.height : h

    ctx.drawImage(
        image,
        x1, y1,
        w, h,
        0, 0,
        w, h
    )

    return canvas
}