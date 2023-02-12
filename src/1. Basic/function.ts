function tambah(n1: number, n2: number): number {
  //type dari return value
  return n1 + n2;
}

function display(text: string, cb: (n1: number, n2: number) => number): void {
  console.info(text, cb(1, 2));
}

let result: (i1: number, i2: number) => number; //type function
result = tambah;

display("Result : ", result);
