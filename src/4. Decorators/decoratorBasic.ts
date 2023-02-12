function Component(text: string) {
  //Decorator Factory
  return function Const(constructor: Function) {
    //Class Decorator
    console.info(text);
    constructor.prototype.color = "red"; //Proto
  };
}

function AnotherDecorator(constructor: Function) {
  //Class Decorator
  console.info("Hi from another");
}

function Log(value: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value as Function;
    descriptor.value = function (...args: any) {
      console.log("Before " + value);
      original.call(this, ...args);
      console.log("After " + value);
    };
  };
}

@Component("Hiii") //Decorator 1st call
@AnotherDecorator //Decorator 2nd call
class ProfileComponent {
  constructor(public name: string = "Reza") {}

  @Log("Decor")
  saySomething(something: string) {
    console.info(something);
  }
}

const circle = new ProfileComponent();
console.info(circle);
circle.saySomething("Haloooooo ")
