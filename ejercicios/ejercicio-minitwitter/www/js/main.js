"use strict";

// test = document.querySelector("input").value;
// <input type="text" id="tweet" name="tweet">
// test.value;
// console.log(test);
// ""
// test.value
// "kknasknas"

//prevent default para que no se recargue la página al enviar

let input = document.querySelector("input");

const button = document.querySelector(".action");
const ul = document.querySelector("#tweets");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = `${document.querySelector("input").value}`;
  ul.appendChild(li);
  input.value = "";
});

button.addEventListener("click", (event) => {
  event.preventDefault();
});

// items.addEventListener("click", (event) => {
//   console.log(event.target);
//   console.log(event.currentTarget);

//   if (event.target.matches("button.delete")) {
//     event.target.parentElement.remove();
//   } else {
//     console.log("NO BORRAMOS");
//   }
// });
