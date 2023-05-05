// membuat object angkot

function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        if (this.penumpang.length === 0) {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        } else {
            for (let i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == undefined) {
                    this.penumpang[i] = namaPenumpang;
                    return this.penumpang;
                } else if (this.penumpang[i] == namaPenumpang) {
                    console.log(namaPenumpang + ' Sudah Naik Tadi!');
                    return this.penumpang;
                } else if (i == this.penumpang.length - 1) {
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }

            }
        }
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            console.log('Angkot Masih Kosong!');
            return false;
        } else {
            for (let i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == namaPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                } else if (this.penumpang[i] == undefined) {
                    console.log(namaPenumpang + ' Sudah Turun / Tidak ada didalam angkot');
                    return this.penumpang;
                }

            }
        }
    }
}

let angkot1 = new Angkot('Riyan', ['Cipondoh', 'Kalideres'], [], 0);
let angkot2 = new Angkot('Putra', ['Balaraja', 'Kalideres'], [], 0);