'use strict';
//bucle de intervalos...
// set class para mañana tarde noche
// if para los ceros en cuando horas minutos y segundos menos que 10

const body = document.querySelector('body');

const h1 = document.querySelector('h1');
// console.log(h1);

h1.style.marginBottom = '45px';

const h2 = document.querySelector('h2');
// console.log(h2);

h2.textContent = '';

function myTimer() {
  const ahora = new Date();

  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();
  let segundos = ahora.getSeconds();
  let separador = ':';

  if (horas < 10) {
    horas = '0' + horas;
  }

  if (minutos < 10) {
    minutos = '0' + minutos;
  }

  if (segundos < 10) {
    segundos = '0' + segundos;
  }

  if (segundos % 2 === 0) {
    separador = ' ';
  }

  if (horas >= 8 && horas < 12) {
    body.classList.add('morning');
    h2.textContent = 'Buenos días';
  }

  if (horas >= 12 && horas < 20) {
    body.classList.add('afternoon');
    h2.textContent = 'Buenas tardes';
  }

  if (horas >= 20 && horas < 8) {
    body.classList.add('night');
    h2.textContent = 'Buenas noches';
  }
  const hora = horas + separador + minutos + separador + segundos;

  h1.innerHTML = hora;
}

setInterval(myTimer, 1000);
