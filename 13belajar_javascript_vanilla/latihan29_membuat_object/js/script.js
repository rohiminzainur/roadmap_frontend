// Membuat Object
// Object Literal
var mhs1 = {
    nama: 'Zain',
    nrp: '0428182781',
    email: 'mzainurrohimin@gmail.com',
    jurusan: 'Teknik Informatika'
}
var mhs2 = {
    nama: 'Boy',
    nrp: '0428182782',
    email: 'boy@gmail.com',
    jurusan: 'Teknik Informatika'
}



// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Willy', '039281271', 'willy@gmail.com', 'Teknik Pertanian');



// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Roy', '034291845', 'roy@gmail.com', 'Teknik Sipil');