// var angka = parseInt(prompt('masukkan angka :'));

// switch (angka) {
//     case 1:
//         alert('anda memasukkan angka 1');
//         break;
//     case 2:
//         alert('anda memasukkan angka 2');
//         break;
//     case 3:
//         alert('anda memasukkan angka 3');
//         break;
//     default:
//         alert('anda memasukkan angka yang salah');
//         break;
// }


// var item = prompt('memasukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

// switch (item) {
//     case 'nasi':
//         alert('makanan / minuman SEHAT!');
//         break;
//     case 'daging':
//         alert('makanan / minuman SEHAT!');
//         break;
//     case 'susu':
//         alert('makanan / minuman SEHAT!');
//         break;
//     case 'hamburger':
//         alert('makanan / minuman TIDAK SEHAT!');
//         break;
//     case 'softdrink':
//         alert('makanan / minuman TIDAK SEHAT!');
//         break;
//     default:
//         alert('yang anda masukkan tidak ada di menu');
//         break;
// }


var item = prompt('memasukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuman SEHAT!');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default:
        alert('yang anda masukkan tidak ada di menu');
        break;
}