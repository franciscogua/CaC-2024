const catalogContainer = document.getElementById("catalog-container");

fetch("./libros.json")
  .then((datos) => {
    if (!datos.ok) {
      throw new Error("Error al traer los datos");
    } else {
      return datos.json();
    }
  })
  .then((libros) => {
    libros.catalogo.forEach((libro) => {
      mostrarLosLibros(libro); // Ensure this matches the function name
    });
    console.log("fetch catalogo ok");
  })
  .catch((e) => {
    console.error("Hubo un error al operar con fetch " + e.message);
  });

const mostrarLosLibros = (libro) => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");

  const bookContainer = document.createElement("div");
  bookContainer.classList.add("book-container");

  const link = document.createElement("a");
  link.href = `./pages/detail/${libro.id}.html`;

  const img = document.createElement("img");
  img.src = libro.URL_portada;
  img.alt = libro.titulo;
  img.classList.add("product-item");

  const title = document.createElement("h5");
  title.textContent = libro.titulo;

  const genre = document.createElement("p");
  genre.textContent = libro.genero;

  link.appendChild(img);
  bookContainer.appendChild(link);
  itemContainer.appendChild(bookContainer);
  itemContainer.appendChild(title);
  itemContainer.appendChild(genre);
  catalogContainer.appendChild(itemContainer);
};
