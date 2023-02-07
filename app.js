var userInput; //unknown type is more strick than any
var userName;
function generateError(message) {
    throw new Error(message);
}
userInput = "name";
if (typeof userInput === "string") {
    //have to check the type first
    userName = userInput;
}
else {
    generateError("Invalid input type!");
}
