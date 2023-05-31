// Manipulasi Node (method lama)
// node.appenChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()

// Manipulasi Node (method baru)
// parentNode.append()
// parentNode.prepend()
// childNode.before()'
// childNode.after()
// childNode.remove()
// childNode.replaceWith()


// Buat element baru
// document.createElement()
const pBaru = document.createElement('p');
// document.createTextNode()
const teksPBaru = document.createTextNode('Ini pragraf baru');
// simpan tulisan ke dalam paragraf
// node.appenChild() -> method lama
// pBaru.appendChild(teksPBaru);

// // node.append() -> method baru
// pBaru.append(teksPBaru);

// // node.prepend() -> method baru
pBaru.prepend(teksPBaru);



// simpan pBaru diakhir section A
const sectionA = document.getElementById('a');
// node.appenChild() -> method lama
// sectionA.appendChild(pBaru);

// // node.append() -> method baru
// sectionA.append(pBaru);

// // node.prepend() -> method baru
sectionA.prepend(pBaru);




// document.createElement()
const liBaru = document.createElement('li');
// document.createTextNode()
const teksLiBaru = document.createTextNode('ini li baru');

// node.appenChild()
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

// node.insertBefore()
// ul.insertBefore(liBaru, li2);

// childNode.before()
// li2.before(liBaru);

// childNode.after()
li2.after(liBaru);


// parentNode.removeChild()
const link = document.getElementsByTagName('a')[0];

link.remove(sectionA);


const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul baru!');

h2Baru.append(teksH2Baru);

p4.replaceWith(h2Baru);


pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';