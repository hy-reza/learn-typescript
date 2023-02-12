"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(object) {
        this._objects.push(object);
    }
}
class CompressStore extends Store {
    compress() { }
}
class SearchStore extends Store {
    find(object) {
        return [...this._objects.filter((p) => p.name === object.name)];
    }
}
class ProductStore extends Store {
    filterProduct() {
        return [];
    }
}
