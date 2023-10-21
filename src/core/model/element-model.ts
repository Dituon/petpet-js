export enum TransformOrigin {
    DEFAULT = 'DEFAULT',
    CENTER = 'CENTER'
}

export abstract class ElementModel{
    static from(): never{
        throw new Error()
    }

    abstract draw(ctx: CanvasRenderingContext2D, frameIndex?: number) : unknown
}