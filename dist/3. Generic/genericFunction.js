"use strict";
function wrapInArray(...num) {
    return [...num];
}
const nums = wrapInArray(1, 2, 3, 4, 5, 6);
const letters = wrapInArray("a", "b", "c", "d");
console.info({ nums, letters });
