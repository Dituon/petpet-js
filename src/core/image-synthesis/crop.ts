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

    const width = usePercentage ? (x2 / 100) * image.width : x2
    const height = usePercentage ? (y2 / 100) * image.height : y2

    canvas.width = width
    canvas.height = height

    ctx.drawImage(
        image,
        x1, y1,
        width, height,
        0, 0,
        width, height
    )

    return canvas
}