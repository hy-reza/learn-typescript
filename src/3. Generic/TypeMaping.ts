interface Things {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

const Chair: ReadOnly<Things> = {
  name: "chair",
  price: 0,
};

// Chair.name = "table";
