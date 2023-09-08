import defaultConfig from "../../../config.js";

interface PetpetConfig {
    server?: string[]
    lang?: string
    template?: string
}

export const config = getConfig()

function getConfig(): PetpetConfig & { save: () => void } {
    let config = {
        ...defaultConfig,
        ...(JSON.parse(localStorage.getItem('config')) || {})
    }

    function saveConfigToLocalStorage() {
        localStorage.setItem('config', JSON.stringify(config))
    }

    config.save = saveConfigToLocalStorage

    config = new Proxy(config, {
        set(target, prop, value) {
            if (Array.isArray(target[prop])) {
                target[prop] = new Proxy(value, {
                    set(arrTarget, arrProp, arrValue) {
                        arrTarget[arrProp] = arrValue
                        saveConfigToLocalStorage()
                        return true
                    },
                    deleteProperty(arrTarget, arrProp) {
                        arrTarget.splice(arrProp, 1)
                        saveConfigToLocalStorage()
                        return true
                    }
                })
            } else {
                target[prop] = value
            }

            saveConfigToLocalStorage()
            return true
        }
    })

    return config
}