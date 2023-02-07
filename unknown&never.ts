let userInput: unknown; //unknown type is more strick than any
let userName: string;

function generateError(message: string): never {
  //type mewakili kondisi yang tidak mungkin terjadi,
  throw new Error(message);
}
userInput = "name";

if (typeof userInput === "string") {
  //have to check the type first
  userName = userInput;
} else {
  generateError("Invalid input type!");
}
