const greeting: string = "Hallo, ";

// interface Name {
//   name: string | number;
// }

type Name = string | number;

function sayHi(
  name: Name,
  { age = 22, gender }: { age: number; gender: string }
): string {
  return `${greeting}${name}, now u were ${age} ${gender} `;
}

console.log(sayHi("Handy Reza Alfanda", { age: 22, gender: "male" }));
