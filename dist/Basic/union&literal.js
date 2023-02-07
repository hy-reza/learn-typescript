"use strict";
const combine = (input1, input2, text) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = `${input1} ${input2}`;
    }
    console.log(text + result);
};
combine("Handy", "Reza", "the result is : ");
combine(8, 8, "the result is : ");
