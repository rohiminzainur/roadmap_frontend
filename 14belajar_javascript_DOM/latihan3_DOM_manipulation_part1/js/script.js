// InnerHtml
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Zain';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World';


// element.style.<propertyCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'Blue';
// judul.style.backgroundColor = 'grey';


// element.setAttribute(), element.getAttribute(), element.removeAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// // judul.setAttribute('name', 'bro');
// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');
// a.removeAttribute('href');



// element.classList.add(), element.classList.remove(), elementclassList.toggle(), element.classList.item(), element.classList.contains(), element.classList.replace()
const p2 = document.querySelector('.p2');
p2.classList.add('label'); // -> menambahkan class label
p2.classList.add('satu'); // -> menambahkan class satu
p2.classList.add('dua'); // -> menambahkan class dua
p2.classList.add('tiga'); // -> menambahkan class tiga
p2.classList.toggle('biru-muda'); // -> class biru-muda muncul dan hilang
p2.classList.item(2); // -> output class dua
p2.classList.contains('dua'); // -> output true
p2.classList.remove('label'); // -> output class label terhapus
p2.classList.replace('tiga', 'empat'); // -> output class empat