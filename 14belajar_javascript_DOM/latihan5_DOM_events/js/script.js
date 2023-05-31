// event handler
// const p3 = document.querySelector('.p3');

// function ubahWarnap2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// function ubahWarnap3() {
//     p3.style.backgroundColor = 'lightblue';
// }


// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnap2;



// addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    liBaru.append(teksLiBaru);
    ul.append(liBaru);
});


// perbedaan menggunakan event handler dan addEventListener
// event handler ketika function lebih dari satu hanya menjalankan function terakhir dibuat
// addEventListener ketika function lebih dari satu dapat menjalankan keduanya

// event handler
const p3 = document.querySelector('.p3');
// p3.onclick = function () {
//     p3.style.backgroundColor = 'red';
// }

// p3.onclick = function () {
//     p3.style.color = 'blue';
// }

// addEventListener
p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'red';
});
p3.addEventListener('click', function () {
    p3.style.color = 'white';
});


// daftar events
// https://developer.mozilla.org/en-US/docs/Web/Events