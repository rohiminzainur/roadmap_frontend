// const btn = document.createElement('button');
// const teksBtn = document.createTextNode('Ubah Warna');
// const body = document.getElementsByTagName('body')[0];

// btn.setAttribute('type', 'button');

// btn.append(teksBtn);

// const h1 = document.getElementsByTagName('h1')[0];
// h1.after(btn);


// btn.addEventListener('click', function () {
//     body.style.backgroundColor = 'blue';
// })


const btn = document.getElementById('tUbahWarna');


btn.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'blue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
});






const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');

tAcakWarna.append(teksTombol);

tAcakWarna.setAttribute('type', 'button');

btn.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    // console.log(r);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});






const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});
sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ', ' + b + ')';
});
sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


document.body.addEventListener('mousemove', function (event) {
    // posisi mouse
    // console.log(event.clientX);
    // ukuran browser
    // console.log(window.innerWidth)
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ', 100)';
});