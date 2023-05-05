// contoh dengan looping
// for (i = 10; i >= 1; i--) {
//     console.log(i);
// }

// function faktorial(n) {
//     var hasil = 1;
//     for (var i = n; i > 0; i--) {
//         hasil *= i;
//     }
//     return hasil;
// }

// Rekursif
// function tampilAngka(n) {
//     if (n === 0) {
//         return;
//     }
//     console.log(n);
//     return tampilAngka(n - 1);
// }

// tampilAngka(10);


// Faktorial
function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n - 1);
}

console.log(faktorial(5));