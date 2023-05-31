// Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function () {
//     card.style.display = 'none';
// });


// DOM Traversal
// METHOD
// parentNode, parentElement, nextSibling, netElementSibling, previousSibling, previousElementSibling
const close = document.querySelectorAll('.close');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault(); // cegah aksi default / tidak dijalankan
    });
});


// const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement); // kakek