'use strict';

const content = document.querySelector('section.content');
const p = document.querySelector('p');
const button = document.querySelector('button');

console.log(content.getAttribute('class').split(' '));
console.log(content.getAttribute('id'));

console.log(p.getAttribute('data-ivan'), p.getAttribute('data-rating'));

console.log(button.getAttribute('disabled'));
console.log(button.hasAttribute('disabled'));

button.removeAttribute('disabled');
button.setAttribute('id', 'launch-missile');
button.setAttribute('id', 'launch-missiles');
button.textContent = 'Lanzar misiles';

const nombreYApellidos = 'Iván Palleiro Pérez';
console.log(nombreYApellidos.split(' '));

console.log(content);

console.log(p.dataset.ivan);
console.log(p.dataset.rating);
p.dataset.nuevo = 'Esto lo creo ahora';
