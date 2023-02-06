//basic ts
function sum(n1, n2, print, pharse) {
    var result = n1 + n2;
    if (print) {
        console.log(pharse + result);
    }
    return result;
}
var number1 = 1;
var number2 = 2;
var isPrint = true;
var resultPharse = "The result is : ";
sum(number1, number2, isPrint, resultPharse);
