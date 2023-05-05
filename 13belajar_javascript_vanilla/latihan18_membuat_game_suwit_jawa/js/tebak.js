alert('Tebak angka dari 1 - 10' + '\nkamu punya 3 kesempatan');
var kesempatan = 2;
while (kesempatan >= 0) {
    // Menangkap pilihan player
    var p = parseInt(prompt('Masukkan angka tebakan'));

    // Menangkap pilihan computer
    // Membangkitkan bilangan random
    var comp = Math.floor(Math.random() * 10) + 1;

    var hasil = '';


    if (kesempatan < 1) {
        hasil = (p == comp) ? 'benar' : 'kesempatan habis' + '\nangka yang benar adalah : ' + comp;
    } else if (p < comp) {
        hasil = 'Terlalu rendah' + '\nkamu punya ' + kesempatan + ' kesempatan lagi';
    } else if (p > comp) {
        hasil = 'Terlalu tinggi' + '\nkamu punya ' + kesempatan + ' kesempatan lagi';
    } else {
        hasil = 'yang anda masukkan salah';
    }
    alert(hasil);
    // if (kesempatan == 0) {
    //     alert('anda gagal');
    // }
    kesempatan--;
}

alert('terimakasih sudah mencoba');