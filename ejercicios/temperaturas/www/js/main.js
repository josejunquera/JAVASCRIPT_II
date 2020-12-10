// Temp. menor que 10: fondo azul
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

// // Obtenemos el elemento table de HTML.
const table = document.querySelector('#temperaturas');

// Funcion que devuelve el class aplicable a la celda a partir del valor de la temperatura
function getStyleTD(temperatura) {
  let style;
  if (temperatura < 10) style = 'lower';
  else if (temperatura < 20) style = 'low';
  else if (temperatura < 30) style = 'medium';
  else style = 'high';
  return style;
}

// Funcion que genera que añade rows a table mediante document
function generarTabla(datos) {
  for (let i = 0; i < datos.length; i++) {
    let style_min = getStyleTD(datos[i].min);
    let style_max = getStyleTD(datos[i].max);

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    td1.textContent = datos[i].city;
    td2.textContent = datos[i].min;
    td2.classList.add(style_min);
    td3.textContent = datos[i].max;
    td3.classList.add(style_max);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);
  }
}

generarTabla(temperaturas);

// // Funcion que genera las filas (rows) de la tabla para innerHtml
// function generarTablaInnerHTML(datos) {
//   let html = '';
//   for (var i = 0; i < datos.length; i++) {
//     let style = getStyleTD(datos[i].min);
//     html += '<tr>';
//     html += '<td>' + datos[i].city + '</td>';
//     html += '<td class=' + style + '>' + datos[i].min + '</td>';
//     style = getStyleTD(datos[i].max);
//     html += '<td class=' + style + '>' + datos[i].max + '</td>';
//     html += '</tr>';
//   }
//   return html;
// }

// // Asigno a las filas a la tabla
// let tableHTML = generarTablaInnerHTML(temperaturas);
// table.children[0].innerHTML += tableHTML;
