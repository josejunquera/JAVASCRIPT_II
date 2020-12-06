"use strict";

const pricipal = document.getElementById("principal");

pricipal.style.color = "red";

console.log(principal);

const claseContent = document.getElementsByClassName("content");
for (const el of claseContent) {
  el.style.color = "green";
}

console.log(claseContent);
