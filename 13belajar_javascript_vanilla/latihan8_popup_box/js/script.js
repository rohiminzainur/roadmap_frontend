// Popup Box
// alert, prompt, confirm

// alert
// alert("belajar popup box");

// Prompt
// var nama = prompt("Belajar popup box");
// alert(nama);

// Confirm
// var test = confirm("Yakin?");
// If
// if (test === true) {
//     alert('user menekan ok');
// } else {
//     alert("user menekan cancel");
// }

alert('selamat datang');
var lagi = true;
while (lagi) {
    var nama = prompt('masukkan nama:');
    alert('halo ' + nama);

    lagi = confirm('coba lagi?');

}

alert('terimakasih');