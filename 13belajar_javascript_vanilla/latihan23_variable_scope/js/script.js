// // global scope / window scope
// var a = 1;

// function tes() {
//     // name conflict
//     var a = 2;
// }

// tes();

// console.log(a);

// "use strict";

// function tes() {
//     a = 2;
// }

// tes();

// console.log(a);

var a = 1;

function tes(a) {
    console.log(a);
}
tes(a);
console.log(a);