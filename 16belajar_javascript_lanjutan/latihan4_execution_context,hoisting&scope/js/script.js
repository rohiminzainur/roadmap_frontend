// Execution Context, Hoisting & Scope

// console.log(nama);
// var nama = 'Zain';

// creation phase pada Global Context
// nama var = undefined -> variable akan diisi undefined
// nama function = fn() -> akan diisi function tersebut
// hoisting
// window = global object
// this = window

// execution phase



// var nama = 'Zain';
// var umur = 26;

// console.log(sayHello());

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting



// var nama = 'Zain';
// var username = '@mzainurrohimin26721';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));


// var nama = 'Zain';
// var username = '@mzainurrohimin26721'; // -> output

// function cetakURL() {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username; -> output username diambil dari variable username
// }

// console.log(cetakURL('@boy')); // -> masuk ke arguments ketika parameter cetakURL tidak ada




function satu() {
    var nama = 'Zain';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama); // -> output undefined
var nama = 'Boy';
satu(); // -> output Zain
dua('Willy'); // -> output Boy
console.log(nama); // -> output Boy




// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();