'use strict';

const sendButton = document.querySelector('form button');
const ul = document.querySelector('#tweets');

function createTweet(content) {
  const li = document.createElement('li');
  const now = new Date();
  li.innerHTML = `
    <p>${content}</p>
    <footer>
      <time>
        ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}
      </time>
      <button class="action">Borrar</button>
    </footer>`;

  return li;
}

sendButton.addEventListener('click', (event) => {
  event.preventDefault();
  const input = event.target.form.querySelector('#tweet');

  console.log(event.target.form.querySelector('#tweet').value);
  if (input.value.length === 0 || input.value.length > 250) {
    window.alert('Esto no vale');
    return;
  }

  ul.prepend(createTweet(input.value));
  input.value = '';
});

ul.addEventListener('click', (event) => {
  console.log(event.target);
  if (event.target.matches('li button.action')) {
    event.target.closest('li').remove();
  }
});

//   let aux = [];
//   aux.push(input.value);
//   localStorage.setItem('tweets', JSON.stringify(aux));
//   input.value = '';
// //meter los nuevos lis en el local storage

// //borrar los lis que se borran del localstorage

//crear un data set para identificar tweets iguales, por ejemplo milisegundo en el que se crea

// localStorage.setItem('dato', JSON.stringify(user));
// const dato = localStorage.getItem('dato');
