// This
// var a = 10;
// console.log(this.a);









// membuat object
// cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this mengembalikan object Global


// cara 2 - object literal
// var obj = {
//     a: 10,
//     nama: 'Zain'
// };
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - constructor
// function Halo() {
//     console.log(this);
//     console.log('halo');
// }

// new Halo();
// this mengembalikan object yang baru dibuat