const libros = [
  {
    id: 1,
    titulo: "H!STÉRICA",
    genero: "Poesía",
    URL_portada: "./images/libros/portada-libro7.jpg",
  },
  {
    id: 2,
    titulo: "CERROJO",
    genero: "Poesía",
    URL_portada: "./images/libros/portada-libro8.jpg",
  },
  {
    id: 3,
    titulo: "SILENCIO",
    genero: "Poesía",
    URL_portada: "./images/libros/portada-libro11.jpg",
  },
  {
    id: 4,
    titulo: "LUZ Y FUERZA",
    genero: "Poesía",
    URL_portada: "./images/libros/portada-libro10.jpg",
  },
  {
    id: 5,
    titulo: "REALIDARK",
    genero: "Poesía",
    URL_portada: "./images/libros/portada-libro9.jpg",
  },
  {
    id: 6,
    titulo: "La lógica de lo perecedero",
    genero: "Plaqueta",
    URL_portada: "./images/libros/portada-libro2.jpg",
  },
  {
    id: 7,
    titulo: "Ojas",
    genero: "Plaqueta",
    URL_portada: "./images/libros/portada-libro3.jpg",
  },
  {
    id: 8,
    titulo: "Polvareda",
    genero: "Plaqueta",
    URL_portada: "./images/libros/portada-libro5.jpg",
  },
];

const catalogContainer = document.getElementById("catalog-container");

libros.forEach((item) => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");

  const bookContainer = document.createElement("div");
  bookContainer.classList.add("book-container");

  const link = document.createElement("a");
  link.href = `./pages/detail/${item.id}.html`;

  const img = document.createElement("img");
  img.src = item.URL_portada;
  img.alt = item.titulo;
  img.classList.add("product-item");

  const title = document.createElement("h5");
  title.textContent = item.titulo;

  const genre = document.createElement("p");
  genre.textContent = item.genero;

  link.appendChild(img);
  bookContainer.appendChild(link);
  itemContainer.appendChild(bookContainer);
  itemContainer.appendChild(title);
  itemContainer.appendChild(genre);
  catalogContainer.appendChild(itemContainer);
});
