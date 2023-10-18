export function generateShortenedConfig<T>(object: T, defaultObject: T): T {
    const difference: any = {}
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            if (object[key] !== defaultObject[key]) {
                difference[key] = object[key]
            }
        }
    }
    return difference
}