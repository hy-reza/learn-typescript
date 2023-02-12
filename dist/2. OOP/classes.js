"use strict";
class Human {
    constructor(name, age, gender, hobby) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hobby = hobby;
        this.activity = (condition) => {
            this.condition = condition || "die";
            if (condition === "hungry")
                this.display("Eat!");
            else if (condition === "tired")
                this.display("Sleep!");
            else if (condition === "normal")
                this.display("Work!");
            else
                this.display("Die");
        };
        this.display = (condition) => {
            console.log(condition);
        };
        this.id = "asd123saddffsdsfdsfds";
        this.condition = "normal";
    }
    get _condition() {
        console.log(this.condition);
        return this.condition;
    }
}
let reza = new Human("Reza", 22, "male");
console.info(reza);
