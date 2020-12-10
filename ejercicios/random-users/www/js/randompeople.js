const apiUrl = `https://randomuser.me/api/?results=${25}`;

async function getRandomUsers() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  for (let i = 0; i < data.results.length; i++) {
    const picture = data.results[i].picture.large;
    const fullName =
      data.results[i].name.first + " " + data.results[i].name.last;
    const locationAndAge =
      data.results[i].location.city +
      " " +
      "(" +
      data.results[i].location.country +
      ")" +
      "," +
      " " +
      (2020 - data.results[i].dob.age);

    const main = document.querySelector("main");

    let article = document.createElement("article");
    let header = document.createElement("header");
    let img = document.createElement("img");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    h1.textContent = fullName;
    p.textContent = locationAndAge;
    img.src = picture;

    main.appendChild(article);
    article.appendChild(header);
    header.appendChild(img);
    header.appendChild(h1);
    article.appendChild(p);
  }
}

getRandomUsers();
