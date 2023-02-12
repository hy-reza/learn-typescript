"use strict";
class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    get fullName() {
        return this.name;
    }
}
class Teacher extends Person {
    constructor(name, gender) {
        super(name, gender);
    }
    get fullName() {
        return this.gender === "male"
            ? `Mr ${super.fullName}`
            : `Miss ${super.fullName}`;
    }
}
class Student extends Person {
}
const hardi = new Teacher("Hardi", "male");
const handy = new Student("Handy", "male");
const getPerson = (people) => {
    for (let person of people) {
        console.log(`${person.fullName}`);
    }
};
getPerson([hardi, handy, new Teacher("Renata", "female")]);
