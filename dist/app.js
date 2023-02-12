"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(text) {
    return function Const(constructor) {
        console.info(text);
        constructor.prototype.color = "red";
    };
}
function AnotherDecorator(constructor) {
    console.info("Hi from another");
}
function Log(value) {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            console.log("Before " + value);
            original.call(this, ...args);
            console.log("After " + value);
        };
    };
}
let ProfileComponent = class ProfileComponent {
    constructor(name = "Reza") {
        this.name = name;
    }
    saySomething(something) {
        console.info(something);
    }
};
__decorate([
    Log("Decor")
], ProfileComponent.prototype, "saySomething", null);
ProfileComponent = __decorate([
    Component("Hiii"),
    AnotherDecorator
], ProfileComponent);
const circle = new ProfileComponent();
console.info(circle);
circle.saySomething("Haloooooo ");
