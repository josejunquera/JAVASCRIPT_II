'use strict';

const content = document.querySelector('section.content');

console.log(content.getAttribute('class'));
console.log(content.getAttribute('class').split(' '));

console.log(content.getAttribute('id'));

console.log(content);

const p = document.querySelector('p');
console.log(p.getAttribute('data-ivan'));
console.log(p.getAttribute('data-rating'));

const button = document.querySelector('button');
console.log(button.getAttribute('disabled'));
console.log(button.hasAttribute('disabled'));

button.removeAttribute('disabled');

button.setAttribute('id', 'launch-missiles');
button.textContent = 'Lanzar misiles';

console.log(p.dataset);
console.log(p.dataset.ivan);
console.log(p.dataset.rating);
p.dataset.nuevo = 'nuevo';
