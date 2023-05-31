// DOM Selection
// document.getElementById() -> mengembalikan element
const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = 'blue';
judul.innerHTML = "Hay Zain";

// document.getElementsByTagName() -> mengembalikan HTMLcolections
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'green';
}

const h1 = document.getElementsByTagName('h1')[0];

h1.style.fontSize = '50px';


// document.getElementsByClassName() -> mengembalikan HTMLcollections
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari javascript';