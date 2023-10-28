let store = {}

export function set(obj) {
  store = Object.assign(store, obj)
}

export function get(key) {
  return store[key]
}
