import {AvatarFilter} from "../../src/core";
import {
    AvatarFilterNameMap,
    AvatarFilterType,
    getDefaultFilter,
    ImageFilterRenderer
} from "../../src/core/image-synthesis/filter-renderer";
import {Setting, ValueAttribute} from "../../src/app/setting/setting";
import {getDialog} from "../../src/app/utils";

import './filter-editor.css'

const range = (max = 1, min = 0, step = 0.01, defaultValue = 0.5) => ({
    type: 'range',
    max: max.toString(),
    min: min.toString(),
    step: step.toString(),
    value: defaultValue.toString()
})

const avatarFilterAttrMap: {
    [key in keyof AvatarFilterNameMap]: {
        [k in keyof Omit<AvatarFilterNameMap[key], 'type'>]: ValueAttribute
    }
} = {
    SWIRL: {
        radius: range(500, 0, 0.5, 0),
        angle: range(360, 0, 0.1, 0),
        x: range(),
        y: range()
    },
    BULGE: {
        radius: range(500, 0, 1),
        strength: range(1, -1),
        x: range(),
        y: range()
    },
    SWIM: {
        scale: range(64, 0, 1, 32),
        stretch: range(32, 0, 0.1, 1),
        angle: range(360, 0, 0.1, 0),
        amount: range(32, 0, 0.1, 10),
        turbulence: range(8, 0, 0.1, 1),
        time: {type: 'number', value: '0'}
    },
    BLUR: {
        radius: range(32, 0, 0.1, 10)
    },
    CONTRAST: {
        brightness: range(1, -1, 0.01, 0),
        contrast: range(1, -1, 0.01, 0)
    },
    HSB: {
        hue: range(1, -1, 0.01, 0),
        saturation: range(1, -1, 0.01, 0),
        brightness: range(1, -1, 0.01, 0)
    },
    HALFTONE: {
        angle: range(360, 0, 0.1, 0),
        radius: range(16, 0, 0.1, 4),
        x: range(),
        y: range()
    },
    DOT_SCREEN: {
        angle: range(360, 0, 0.1, 0),
        radius: range(16, 0, 0.1, 4),
        x: range(),
        y: range()
    },
    NOISE: {
        amount: range(1, 0, 0.01, 0.25)
    },
    DENOISE: {
        exponent: range(50, 0, 1, 20)
    },
    OIL: {
        skip: range(16, 0, 1, 4),
        levels: range(64, 0, 1, 8),
        range: range(32, 0, 1, 12)
    }
}

export function getFilterAttrs<K extends AvatarFilterType>(type: K): {
    [key in keyof Omit<AvatarFilterNameMap[K], 'type'>]: ValueAttribute
} {
    return avatarFilterAttrMap[type]
}

export class BaseFilterEditor {
    static readonly defaultFilterType = AvatarFilterType.BULGE
    protected static readonly publicDialog = getDialog()
    protected static readonly render = new ImageFilterRenderer()
    static {
        document.body.appendChild(BaseFilterEditor.publicDialog)
    }

    protected nowFilterType: AvatarFilterType = BaseFilterEditor.defaultFilterType
    protected readonly avatar: HTMLCanvasElement | HTMLImageElement
    protected filterSet: Set<AvatarFilter> = new Set()
    protected parentElement = document.createElement('div')
    protected previewElement = document.createElement('div')
    protected settingElement = document.createElement('div')

    constructor(avatar: HTMLCanvasElement | HTMLImageElement) {
        this.avatar = avatar
        const that = this
        this.parentElement.classList.add('filter-editor')
        this.previewElement.append(
            this.builtAvatar,
            new Setting({
                get filter() {
                    return that.nowFilterType
                },
                set filter(type) {
                    that.nowFilterType = type
                },
                add() {
                    that.addFilter(getDefaultFilter(that.nowFilterType))
                },
                save() {
                    BaseFilterEditor.publicDialog.close()
                }
            }, {
                filter: {
                    type: 'select',
                    options: Object.values(AvatarFilterType)
                }
            }).render())
        this.parentElement.append(this.previewElement, this.settingElement)
    }

    render() {
        return this.parentElement
    }

    async showModal(): Promise<Event> {
        BaseFilterEditor.publicDialog.innerHTML = ''
        BaseFilterEditor.publicDialog.appendChild(this.parentElement)
        BaseFilterEditor.publicDialog.showModal()
        return new Promise(res =>
            BaseFilterEditor.publicDialog.addEventListener('close', res, {once: true})
        )
    }

    addFilter(filter: AvatarFilter) {
        this.filterSet.add(filter)
        const that = this
        this.settingElement.appendChild(new Setting(
            new Proxy({
                ...filter,
                type: undefined,
                _delete: () => {
                    that.filterSet.delete(filter)
                    that.update()
                }
            }, {
                set(target: AvatarFilter, key, value) {
                    target[key] = value
                    filter[key] = value
                    that.update()
                    return true
                }
            }),
            getFilterAttrs(filter.type),
            filter.type
        ).render())
    }

    update() {
        BaseFilterEditor.render.apply(this.filters)
    }

    set filters(filters: AvatarFilter[]) {
        this.filterSet = new Set(filters)
    }

    get filters(): AvatarFilter[] {
        return [...this.filterSet]
    }

    get builtAvatar(): HTMLCanvasElement {
        return BaseFilterEditor.render.texture(this.avatar).apply(this.filters).fxCanvas
    }
}