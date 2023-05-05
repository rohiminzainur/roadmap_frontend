// Soal buat dengan pengulangan for dan pengondisian if else
// Angkot no.1 beroperasi dengan baik.
// Angkot no.2 beroperasi dengan baik.
// Angkot no.3 beroperasi dengan baik.
// Angkot no.4 beroperasi dengan baik.
// Angkot no.5 beroperasi dengan baik.
// Angkot no.6 beroperasi dengan baik.
// Angkot no.7 sedang tidak beroperasi.
// Angkot no.8 sedang tidak beroperasi.
// Angkot no.9 sedang tidak beroperasi.
// Angkot no.10 sedang tidak beroperasi.

let jmlAngkot = 10;
let ankotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= 6) {
        console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik.');
    } else {
        console.log('Angkot no. ' + noAngkot + ' sedang tidak beroperasi.');
    }

}