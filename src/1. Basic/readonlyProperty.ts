type Employe = {
  readonly id: string; //readonly
  name: string;
};

const employe: Employe = {
  id: "12312312312",
  name: "Handy Reza Alfanda",
};

// employe.id = "123123123" cannot do this thing cuz read-only
