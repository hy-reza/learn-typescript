"use strict";
class Transportation {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
}
class Plane extends Transportation {
    constructor(name, brand) {
        super(name, brand);
    }
    fly() {
        console.info("Fly");
    }
}
const binair = new Plane("Binair", "Flyhigh");
console.info(binair);
binair.fly();
