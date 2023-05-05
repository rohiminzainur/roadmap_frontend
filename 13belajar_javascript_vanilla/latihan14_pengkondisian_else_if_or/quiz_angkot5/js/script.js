// Soal
// Angkot no.1 beroperasi dengan baik.
// Angkot no.2 beroperasi dengan baik.
// Angkot no.3 beroperasi dengan baik.
// Angkot no.4 beroperasi dengan baik.
// Angkot no.5 beroperasi dengan baik.
// Angkot no.6 beroperasi dengan baik.
// Angkot no.7 sedang tidak beroperasi.
// Angkot no.8 sedang lembur.
// Angkot no.9 sedang tidak beroperasi.
// Angkot no.10 sedang lembur.

for (let noAngkot = 1; noAngkot <= 10; noAngkot++) {
    if (noAngkot <= 6) {
        console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik.');
    } else if (noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot no. ' + noAngkot + ' sedang lembur.');
    } else {
        console.log('Angkot no. ' + noAngkot + ' sedang tidak beroperasi.');
    }

}