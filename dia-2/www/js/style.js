'use strict';

const h1 = document.querySelector('header h1');

console.log(h1.getAttribute('style'));

h1.setAttribute('style', 'border: 10px dotted green;');

h1.style.color = 'red';

h1.style.fontSize = '4rem';
console.log(window.getComputedStyle(h1));
