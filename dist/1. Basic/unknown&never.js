"use strict";
let userInput;
let userName;
function generateError(message) {
    throw new Error(message);
}
userInput = "name";
if (typeof userInput === "string") {
    userName = userInput;
}
else {
    generateError("Invalid input type!");
}
