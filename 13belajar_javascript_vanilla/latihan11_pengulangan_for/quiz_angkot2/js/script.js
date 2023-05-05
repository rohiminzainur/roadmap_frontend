// Soal = buat dengan pengulangan while dan for 
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

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik.')

    noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot no. ' + noAngkot + ' sedang tidak beroperasi.')
}