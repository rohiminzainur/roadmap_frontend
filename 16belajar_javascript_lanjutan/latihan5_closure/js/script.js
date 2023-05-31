// function init() {
//     // let nama = 'Zain';

//     return function (nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama();
// panggilNama('Roy');
// panggilNama('Boy');



// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatMalam('Zain'));




let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();



console.log(add());
console.log(add());
console.log(add());