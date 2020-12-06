'use strict';

const important = document.querySelector('.important');
const body = document.querySelector('body');

console.log(important);

//ASÍ NO CREARÍA UN NUEVO SPAN, LO SACA COMO TEXTO

// important.textContent = `<span>${content}</span>`;

//DE ESTA MANERA SI CREA UN NUEVO SPAN, CON INNERHTML
// important.innerHTML = `<span>${content}</span>`;

important.innerHTML = `<span>Hola</span>`;

const experimento = document.getElementById('experimento');

console.log(experimento.innerHTML);
console.log(experimento.outerHTML);

const user = { name: 'Ana', age: 25 };

experimento.innerHTML = `<h1>${user.name} tiene ${user.age} años</h1>`;
