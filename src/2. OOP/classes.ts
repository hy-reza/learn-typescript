class Human {
  readonly id: string;
  // name: string;
  // age: number;
  // gender: string;
  // hobby?: string[]; //if using that parameter properties this line of code is does't metter / useless
  private condition?: "hungry" | "tired" | "normal" | "die" | undefined;

  constructor(
    public name: string,
    public age: number,
    public gender: string,
    public hobby?: string[] //parametes properties
  ) {
    this.id = "asd123saddffsdsfdsfds";
    this.condition = "normal";
    // this.age = age;
    // this.gender = gender;
    // this.hobby = hobby;  //if using that parameter properties this line of code is does't metter
  }

  activity = (condition?: "hungry" | "tired" | "normal" | "die"): void => {
    this.condition = condition || "die";
    if (condition === "hungry") this.display("Eat!");
    else if (condition === "tired") this.display("Sleep!");
    else if (condition === "normal") this.display("Work!");
    else this.display("Die");
  };

  private display = (condition: string): void => {
    console.log(condition);
  };

  get _condition() {
    //getter
    console.log(this.condition);

    return this.condition;
  }
  // getCondition = () => { //old getter
  //   console.log(this.condition);
  // };

  // set _condition(condition: "hungry" | "tired" | "normal" | "die" | undefined) {
  //   this._condition = condition || "die";
  // } //setter
}

let reza = new Human("Reza", 22, "male");
console.info(reza);

