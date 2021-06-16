const localStore = function (itemName) {
    this.set = function (value) {
        localStorage.setItem(itemName, JSON.stringify(value))
    }
    this.get = function () {
        return localStorage.getItem(itemName) ? JSON.parse(localStorage.getItem(itemName)) : []
    }
    this.remove = function () {
        localStorage.removeItem(itemName)
    }
}

export const localData = new localStore('Daily-Work')