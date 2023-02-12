"use strict";
class Toko {
    constructor() {
        this._object = [];
    }
    add(inpt) {
        this._object.push(inpt);
    }
    find(key, value) {
        return this._object.find((obj) => obj[key] === value);
    }
}
