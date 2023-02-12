class Person {
  constructor(public name: string, public gender: "male" | "female") {}
  get fullName() {
    return this.name;
  }
}

class Teacher extends Person {
  constructor(name: string, gender: "male" | "female") {
    super(name, gender);
  }

  override get fullName() { //overide methode
    return this.gender === "male"
      ? `Mr ${super.fullName}`
      : `Miss ${super.fullName}`;
  }
}

class Student extends Person {}

const hardi = new Teacher("Hardi", "male");
const handy = new Student("Handy", "male");

const getPerson = (people: Person[]) => {
  for (let person of people) {
    console.log(`${person.fullName}`);
  }
};

getPerson([hardi, handy, new Teacher("Renata", "female")]);
