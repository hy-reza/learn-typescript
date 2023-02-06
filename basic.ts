//basic ts
function sum(n1: number, n2: number, print: boolean, pharse: string): number {
  const result = n1 + n2;
  if (print) {
    console.log(pharse + result);
  }
  return result;
}

//variabel tidak perlu diberi keterangan type kecuali tidak di assign value-nya
const number1 = 1;
const number2 = 2;
const isPrint = true;
const resultPharse = "The result is : ";

sum(number1, number2, isPrint, resultPharse);
