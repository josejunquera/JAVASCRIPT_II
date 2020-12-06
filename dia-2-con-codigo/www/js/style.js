'use strict';

const h1 = document.querySelector('header h1');

console.log(h1.getAttribute('style'));

h1.setAttribute('style', 'border: 5px dotted red;');

h1.style.color = 'blue';

h1.style.borderWidth = '3px';

h1.style.fontSize = '8rem';

console.log(h1);
console.log(window.getComputedStyle(h1));

console.log(h1.style.textDecoration);
