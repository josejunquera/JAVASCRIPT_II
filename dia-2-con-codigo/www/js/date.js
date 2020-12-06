'use strict';

const now = new Date();
console.log(now);
console.log(now.getTime());

console.log('Ano', now.getFullYear());
console.log('Mes', now.getMonth());
console.log('Dia del mes', now.getDate());
console.log('Dia de la semana', now.getDay());
console.log('Hora', now.getHours());
console.log('Minutos', now.getMinutes());
console.log('Seconds', now.getSeconds());
console.log('Milliseconds', now.getMilliseconds());

const fecha = new Date('September 2 1976 07:09:28.789');
console.log(fecha);

const fecha2 = new Date(0);
console.log(fecha2);

console.log('--------------------------------');

const ahora = new Date();

ahora.setDate(20);
ahora.setMonth(0);
ahora.setFullYear(2030);

console.log(`${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`);
