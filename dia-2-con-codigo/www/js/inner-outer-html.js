'use strict';

const important = document.querySelector('.important');
const body = document.querySelector('body');
const experimento = document.getElementById('experimento');

const content = important.textContent;

important.innerHTML = `<span>HOLA</span>`;

const user = { name: 'Ana', age: 26 };

experimento.outerHTML = `<h1>${user.name} tiene ${user.age} años</h1>`;

console.log(experimento.innerHTML, experimento.outerHTML);
