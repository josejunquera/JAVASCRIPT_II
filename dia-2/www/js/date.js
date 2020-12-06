'use strict';

const now = new Date();

console.log(now);

console.log(now.getTime());

console.log('Año', now.getFullYear());
console.log('Mes', now.getMonth());
console.log('Día del mes', now.getDate());
console.log('Día de la semana', now.getDay());
console.log('Hora', now.getHours());
console.log('Minutos', now.getMinutes());
console.log('Segundos', now.getSeconds());
console.log('Milisegundos', now.getMilliseconds());

const fecha = new Date('Septiembre 2 1976 07:09:28.789');
console.log(fecha);

const fecha2 = new Date(20000);
console.log(fecha2);

console.log('-----------------');

const ahora = new Date();

ahora.setDate(17);
ahora.setMonth(0);
ahora.setFullYear(2077);
console.log(ahora);
console.log(`${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`);
