"use strict";

const selection = document.querySelector("main li");
const selectionAll = document.querySelectorAll("main li");

console.log(selection);
console.log(selectionAll);

const selectionId = document.querySelector("#este");
console.log(selectionId);

const selectionClass = document.querySelectorAll(".otro");
console.log(selectionClass);

selection.textContent = "Esto es una prueba cambiando el texto";

selectionAll.textContent;

for (const el of selectionAll) {
  el.textContent = Math.random();
}
