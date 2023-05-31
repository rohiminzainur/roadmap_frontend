var tanya = true;
while (tanya) {
    // Menangkap pilihan player
    var p = prompt('Pilih : Gajah, Semut, Orang');



    // Menangkap pilihan computer
    // Membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'Gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'Orang';
    } else {
        comp = 'Semut';
    }


    // Menentukan rules
    var hasil = '';

    if (p == comp) {
        hasil = 'Seri!';
    } else if (p == 'Gajah') {
        // if (comp == 'Orang') {
        //     hasil = 'Menang!';
        // } else {
        //     hasil = 'Kalah!';
        // }
        hasil = (comp == 'Orang') ? 'Menang!' : 'Kalah!';
    } else if (p == 'Orang') {
        hasil = (comp == 'Gajah') ? 'Kalah!' : 'Menang!';
    } else if (p == 'Semut') {
        hasil = (comp == 'Orang') ? 'Kalah!' : 'Menang!';
    } else {
        hasil = 'Memasukkan pilihan yang salah!';
    }

    // Tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

    tanya = confirm('Lagi?');
}

alert('Terimakasih sudah bermain');