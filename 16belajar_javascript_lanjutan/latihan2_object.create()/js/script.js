// Cara untuk membuat Object pada javascript
// 1. Object Literal
// PROBLEM : Tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'Zain',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
// }
// let mahasiswa2 = {
//     nama: 'Roy',
//     energi: 20,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
// }


// 2. Function Declaration
const methodMahasiswa = {
    makan: function (jam) {
        this.energi += jam;
        console.log(`Hello ${this.nama}, selamat makan!`);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`Hello ${this.nama}, selamat main!`);
    },
    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Hello ${this.nama}, selamat tidur!`);
    }
}

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let zain = Mahasiswa('Zain', 26);
let Boy = Mahasiswa('Boy', 20);



// 3. Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

// }

// let zain = new Mahasiswa('Zain', 25);

// 4. Object.create