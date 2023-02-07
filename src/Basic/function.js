"use strict";
function tambah(n1, n2) {
    //type dari return value
    return n1 + n2;
}
function display(text, cb) {
    console.info(text, cb(1, 2));
}
let result; //type function
result = tambah;
display("Result : ", result);
