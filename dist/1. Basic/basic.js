"use strict";
function sum(n1, n2, print, pharse) {
    const result = n1 + n2;
    if (print) {
        console.log(pharse + result);
    }
    return result;
}
const number1 = 1;
const number2 = 2;
const isPrint = true;
const resultPharse = "The result is : ";
sum(number1, number2, isPrint, resultPharse);
