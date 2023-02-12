class Transportation {
  constructor(public name: string, public brand: string) {}
}

class Plane extends Transportation {
  constructor(name: string, brand: string) {
    super(name, brand);
  }

  fly() {
    console.info("Fly");
  }
}

const binair = new Plane("Binair", "Flyhigh")

console.info(binair);
binair.fly()