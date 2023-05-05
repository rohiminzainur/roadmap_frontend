// Manipulasi Array

// 1. Menambahkan isi Array
// var arr = [];
// arr[0] = 'Zain';
// arr[1] = 'Roy';
// arr[2] = 'Zuki';
// arr[6] = 'tiara';

// console.log(arr);

// 2. Menghapus isi Array
// var arr = ['Zain', 'Roy', 'Zuki'];
// arr[1] = undefined;
// console.log(arr);

// var arr = ['Zain', 'Roy', 'Boy'];

// for (let i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr[i]);

// }

// Method Array
// var arr = ['Zain', 'Roy', 'Boy'];
// 1. Join
// console.log(arr.join(' - '));


// 2. push(menambahkan elemen di akhir bisa lebih dari satu) & pop(menghapus elemen diakhir satu persatu)
// arr.push('Upin', 'ipin');
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift(menambahkan elemen di awal) & shift(menghapus elemen di awal)
// arr.unshift('Zuki');
// arr.shift();
// console.log(arr.join(' - '));

// 4. slice & splice
// Splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(1, 2, 'Upin', 'Ipin');
// console.log(arr.join(' - '));

// Slice(indexAwal, indexAkhir)
// var arr = ['Zain', 'Roy', 'Boy'];
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(' - '));
// console.log(arr.join(' - '));


// 5. forEach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var nama = ['Upin', 'Ipin', 'Jarjit'];
// for (let i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function (e) {
//     console.log(e);
// });

// nama.forEach(function (e, i) {
//     console.log('Nama : ' + e + ' Mahasiswa Ke- ' + (i + 1));
// });

// 6. Map
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 4];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// 7. Sort
// contoh 1
// var angka = [1, 5, 2, 3, 6, 7, 8, 4];
// console.log(angka.join(' - '));
// angka.sort();
// console.log(angka.join(' - '));

// contoh 2
// var angka = [1, 5, 10, 2, 3, 6, 20, 7, 8, 4];
// angka.sort(function (a, b) {
//     return a - b;
// });
// console.log(angka.join(' - '));

// 8. filter & find
// filter
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// var angka2 = angka.filter(function (x) {
//     return x > 5;
// });
// console.log(angka2.join(' - '));

// find(hanya dapat mengembalikan / return 1)
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.find(function (x) {
    return x > 5;
});

console.log(angka2);