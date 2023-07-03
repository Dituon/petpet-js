import { ElementModel } from './element-model.mjs';
import { assertArrayLength, getImageFromBlob } from "../utils/utils";
import { binarizeImage, clipCircleImage, cropImage, deformImage, flipImage, grayImage, mirrorImage, rotateImage } from "../image-synthesis";
import { Parser } from "expr-eval";
import { decodeGif } from "../gif-synthesis/decoder";
import { decodeVideo } from "../video-synthesis/decoder";
export var AvatarType;
(function (AvatarType) {
    AvatarType["FROM"] = "FROM";
    AvatarType["TO"] = "TO";
    AvatarType["GROUP"] = "GROUP";
    AvatarType["BOT"] = "BOT";
    AvatarType["RANDOM"] = "RANDOM";
})(AvatarType || (AvatarType = {}));
export var AvatarPosType;
(function (AvatarPosType) {
    AvatarPosType["ZOOM"] = "ZOOM";
    AvatarPosType["DEFORM"] = "DEFORM";
})(AvatarPosType || (AvatarPosType = {}));
export var AvatarCropType;
(function (AvatarCropType) {
    AvatarCropType["NONE"] = "NONE";
    AvatarCropType["PIXEL"] = "PIXEL";
    AvatarCropType["PERCENT"] = "PERCENT";
})(AvatarCropType || (AvatarCropType = {}));
export var AvatarFit;
(function (AvatarFit) {
    AvatarFit["CONTAIN"] = "CONTAIN";
    AvatarFit["COVER"] = "COVER";
    AvatarFit["FILL"] = "FILL";
})(AvatarFit || (AvatarFit = {}));
export var AvatarStyle;
(function (AvatarStyle) {
    AvatarStyle["MIRROR"] = "MIRROR";
    AvatarStyle["FLIP"] = "FLIP";
    AvatarStyle["GRAY"] = "GRAY";
    AvatarStyle["BINARIZATION"] = "BINARIZATION";
})(AvatarStyle || (AvatarStyle = {}));
const defaultTemplate = {
    type: undefined,
    pos: undefined,
    posType: AvatarPosType.ZOOM,
    crop: null,
    cropType: AvatarCropType.NONE,
    style: [],
    round: false,
    rotate: false,
    avatarOnTop: true,
    antialias: true,
    resampling: false,
    angle: 0,
    opacity: 1
};
export function compileAvatarTemplate(template) {
    // @ts-ignore return if compiled
    if (template.compiled)
        return template;
    const t = { ...defaultTemplate, ...template };
    const originPos = t.pos;
    let targetPos;
    switch (t.posType) {
        case AvatarPosType.ZOOM:
            targetPos = typeof originPos[0] !== 'object' ?
                [assertArrayLength(originPos, 4)] : originPos.map(e => assertArrayLength(e, 4));
            t.pos = targetPos.map(e => e.map(ele => typeof ele === 'number' ? ele : Parser.parse(ele)));
            break;
        case AvatarPosType.DEFORM:
            targetPos = originPos.map(ele => assertArrayLength(ele, 5).map(e => assertArrayLength(e, 2)));
            t.pos = targetPos.map(e => e.map(ele => ele.map(el => typeof el === 'number' ? el : Parser.parse(el))));
            break;
    }
    // @ts-ignore
    t.compiled = true;
    return t;
}
export class AvatarModel extends ElementModel {
    type;
    template;
    originBlob;
    frames;
    pos;
    initPromise;
    constructor(template, data) {
        super();
        this.template = compileAvatarTemplate(template);
        this.type = template.type;
        this.originBlob = data[this.type.toString().toLowerCase()];
        if (!this.originBlob)
            throw new Error(`no ${this.type} image`);
        this.initPromise = this.init();
    }
    async init() {
        await this.loadFile();
        await this.setCrop();
        await this.setStyle();
        await this.setRound();
        await this.setPos();
    }
    async loadFile() {
        const blob = this.originBlob;
        if (blob.type.startsWith('video/')) {
            this.frames = await decodeVideo(blob, this.template.pos.length);
        }
        else if (!blob.type.startsWith('image')) {
            throw new Error("不支持的格式: " + blob.type);
        }
        if (blob.type === 'image/gif') {
            this.frames = await decodeGif(blob);
        }
        else {
            this.frames = [await getImageFromBlob(blob)];
        }
    }
    setCrop() {
        const cropType = this.template.cropType;
        if (cropType === AvatarCropType.NONE)
            return;
        this.frames = this.frames.map(frame => cropImage(frame, this.template.crop, cropType === AvatarCropType.PERCENT));
    }
    setStyle() {
        for (const style of this.template.style) {
            console.log(style, 1);
            switch (style) {
                case AvatarStyle.FLIP:
                    this.frames = this.frames.map(flipImage);
                    break;
                case AvatarStyle.MIRROR:
                    this.frames = this.frames.map(mirrorImage);
                    break;
                case AvatarStyle.GRAY:
                    this.frames = this.frames.map(grayImage);
                    break;
                case AvatarStyle.BINARIZATION:
                    this.frames = this.frames.map(binarizeImage);
                    break;
                default:
                    throw new Error('unknown style ' + style);
            }
        }
    }
    setRound() {
        if (this.template.round)
            this.frames = this.frames.map(clipCircleImage);
    }
    async setPos() {
        switch (this.template.posType) {
            case AvatarPosType.ZOOM:
                this.pos = this.template.pos.map(ele => ele.map(this.evalExpression));
                break;
            case AvatarPosType.DEFORM:
                this.pos = this.template.pos.map(ele => ele.map(e => e.map(this.evalExpression)));
                break;
        }
    }
    evalExpression(e) {
        return typeof e === 'number' ? e : e.evaluate({
            height: this.frames[0].height,
            width: this.frames[0].width
        });
    }
    getFrame(index) {
        return (index < this.frames.length ? this.frames[index] : this.frames.at(-1));
    }
    getPos(index) {
        return index < this.pos.length ? this.pos[index] : this.pos.at(-1);
    }
    async getLength() {
        await this.initPromise;
        return { posLength: this.pos.length, frameLength: this.frames.length };
    }
    async draw(ctx, frameIndex = 0) {
        await this.initPromise;
        let frame = this.getFrame(frameIndex);
        const pos = this.getPos(frameIndex);
        let { angle, opacity, rotate } = this.template;
        ctx.globalAlpha = opacity;
        if (rotate)
            angle += (360 / pos.length) * frameIndex;
        switch (this.template.posType) {
            case AvatarPosType.ZOOM:
                if (angle)
                    frame = rotateImage(frame, angle);
                ctx.drawImage(frame, ...pos);
                break;
            case AvatarPosType.DEFORM:
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = ctx.canvas.width;
                tempCanvas.height = ctx.canvas.height;
                await deformImage(tempCanvas, frame, pos);
                ctx.drawImage(tempCanvas, 0, 0);
                break;
        }
        ctx.globalAlpha = 1;
    }
    get onTop() {
        return this.template.avatarOnTop;
    }
    async getSize() {
        await this.initPromise;
        const frame = this.frames[0];
        return { width: frame.width, height: frame.height };
    }
}
export class AvatarModelList {
    arr;
    initPromise;
    topAvatars = [];
    bottomAvatars = [];
    sizeMap = Object.create(null);
    maxLength;
    constructor(arr) {
        this.arr = arr;
        this.initPromise = this.init();
    }
    async init() {
        return Promise.all(this.arr.map(async (avatar, i) => {
            if (avatar.onTop) {
                this.topAvatars.push(avatar);
            }
            else {
                this.bottomAvatars.push(avatar);
            }
            const size = await avatar.getSize();
            this.sizeMap[`avatar${i}Width`] = size.width;
            this.sizeMap[`avatar${i}Height`] = size.height;
            this.maxLength = await avatar.getLength();
        }));
    }
    async getSizeMap() {
        await this.initPromise;
        return this.sizeMap;
    }
    async getMaxLength() {
        await this.initPromise;
        return this.maxLength;
    }
    static createFrom(objArr, data) {
        return new AvatarModelList(objArr.map(temp => new AvatarModel(temp, data)));
    }
}
//# sourceMappingURL=avatar-model.mjs.map