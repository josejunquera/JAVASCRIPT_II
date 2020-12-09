// Temp. menor que 20: fondo verde
// Temp. entre 20 y 30: fondo naranja
// Temp. mayor de 30: fondo rojo

const temperaturas = [
  {
    city: 'A Coruña',
    min: 17,
    max: 23,
  },
  {
    city: 'Ferrol',
    min: 15,
    max: 32,
  },
  {
    city: 'Lugo',
    min: -20,
    max: 31,
  },
  {
    city: 'Ourense',
    min: 18,
    max: 35,
  },
  {
    city: 'Pontevedra',
    min: 18,
    max: 29,
  },
];

for (let i = 0; i < temperaturas.length; i++) {
  const table = document.querySelector('#temperaturas');

  const tr+"i" = document.createElement('tr');

  const td1+"i" = document.createElement('td');
  const td2+"i" = document.createElement('td');
  const td3+"i" = document.createElement('td');

  td1+"i".textContent = temperaturas[i].city;
  td2+"i".textContent = temperaturas[i].min;
  td3+"i".textContent = temperaturas[i].max;

  tr+"i".appendChild(td1+"i");
  tr+"i".appendChild(td2+"i");
  tr+"i".appendChild(td3+"i");

  table.appendChild(tr+"i");
}

const tr2 = document.createElement('tr');

const td21 = document.createElement('td');
const td22 = document.createElement('td');
const td23 = document.createElement('td');

td21.textContent = temperaturas[1].city;
td22.textContent = temperaturas[1].min;
td23.textContent = temperaturas[1].max;

tr2.appendChild(td21);
tr2.appendChild(td22);
tr2.appendChild(td23);

table.appendChild(tr2);

// Temp. menor que 10: fondo azul
// Temp. menor que 20: fondo verde
// Temp. entre 20 y 30: fondo naranja
// Temp. mayor de 30: fondo rojo

// const td = document.querySelectorAll('td');

// td22.classList.add('high');
// td.classList.add('high');
