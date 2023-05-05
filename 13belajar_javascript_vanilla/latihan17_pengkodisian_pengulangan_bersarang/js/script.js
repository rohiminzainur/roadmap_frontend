// let s = '';

// for (let a = 0; a < 5; a++) {
//     s += '*';
// }
// console.log(s);

// let s = '';

// for (let b = 1; b <= 2; b++) {
//     for (let c = 1; c <= b; c++) {
//         s += '*';
//     }
//     s += '\n';
// }

// console.log(s);

// let s = '';
// for (let d = 1; d <= 5; d++) {
//     for (let e = 5; e >= d; e--) {
//         s += '*';
//     }
//     s += '\n';
// }

// console.log(s);

let s = '';
let baris = 5;

for (let f = 1; f <= baris; f++) {
    for (let g = baris - 1; g >= f; g--) {
        s += ' ';
    }
    for (let h = 1; h <= f; h++) {
        s += '*';
    }
    for (let i = 1; i <= f - 1; i++) {
        s += '*';
    }
    s += '\n';
}

console.log(s);