// abstract class Shape {
//   constructor(public color: string, width: number, height: number) {}
//   abstract draw(): void;
// }

// class Circle extends Shape {
//   constructor(color: string, width: number, height: number) {
//     super(color, width, height);
//   }

//   draw() {}
// }

interface Shape {
  color: string;
  width: number;
  height: number;
  draw(): void;
}

class Circle implements Shape {
  constructor(
    public color: string,
    public width: number,
    public height: number
  ) {}
  draw(): void {
    throw new Error("Method not implemented.");
  }
}
