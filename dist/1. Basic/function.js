"use strict";
function tambah(n1, n2) {
    return n1 + n2;
}
function display(text, cb) {
    console.info(text, cb(1, 2));
}
let result;
result = tambah;
display("Result : ", result);
