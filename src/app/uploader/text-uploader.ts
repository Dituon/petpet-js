import {TextModel, TextModelList} from "../../core/model/text-model";
import {Setting} from "../setting/setting";
import {createTitle} from "../utils";

export class TextUploader {
    private textModels: TextModelList
    private readonly textDomList = document.createElement('div')
    private readonly settingDom = new Setting({
        add: () => this.addTextModel()
    }).render()

    constructor() {
        this.textDomList.appendChild(this.settingDom)
    }

    set texts(textModels: TextModelList) {
        this.textModels = textModels
        this.textDomList.innerHTML = ''
        this.textDomList.appendChild(this.settingDom)
        for (let text of this.textModels.texts) {
            this.addTextModel(text)
        }
    }

    addTextModel(text: TextModel = this.textModels.addTextModel()) {
        const setting = new Setting(text.settingObject, text.settingAttributes)
        this.textDomList.appendChild(setting.render())
    }

    render() {
        const root = document.createElement('div')

        root.append(
            createTitle('Set Text'),
            this.textDomList
        )
        return root
    }
}