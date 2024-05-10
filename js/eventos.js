const eventos = [
  {
    id: 1,
    fecha: new Date("2019-08-21"),
    titulo: "Ciclo Monserrat edición invierno",
    URL_imagen: "./images/eventos/evento2.webp",
    descripcion:
      "¡Volvemos a hacer el ciclo en CABA! 🍝 Ciclo de invierno al calor del mediodía en @lanuovapiazza 📖 Nos acompañarán con sus lecturas @andinachon @juanefegarcia el colectivo @notandistintes_ y nuestras autoras @lauraalejandrabravo y @e1000cef",
  },
  {
    id: 2,
    fecha: new Date("2019-09-25"),
    titulo: "Ciclo de lectura",
    URL_imagen: "./images/eventos/evento1.webp",
    descripcion:
      "Este domingo volvemos a #CABA y una de lxs poetas que nos acompañaran es @andinachon 🎤 Andi Nachon, Profesora de letras, poeta y guionista.",
  },
  {
    id: 3,
    fecha: new Date("2019-10-04"),
    titulo: "Encuentro de poetas",
    URL_imagen: "./images/eventos/evento3.webp",
    descripcion:
      "#CicloMonserrat en @lanuovapiazza junto a @andinachon @juanefegarcia y @notandistintes_",
  },
];

const eventosContainer = document.getElementById("eventos-container");

function monthToString(month) {
  const monthNames = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  return monthNames[month];
}

eventos.forEach((item) => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("col-md-4");
  itemContainer.classList.add("on-hover");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card", "border-0", "mb-3", "h-100");

  const link = document.createElement("a");
  link.href = `./eventos/detail/${item.id}.html`;

  const img = document.createElement("img");
  img.src = item.URL_imagen;
  img.alt = item.titulo;
  img.classList.add("card-img-top");

  const fechaContainer = document.createElement("div");
  fechaContainer.classList.add(
    "date-pos",
    "bg-info-gradiant",
    "p-2",
    "d-inline-block",
    "text-center",
    "rounded",
    "text-white",
    "position-absolute",
    "d-flex",
    "flex-row"
  );

  const fechaMes = document.createElement("span");
  fechaMes.textContent = monthToString(item.fecha.getMonth());

  const fechaDia = document.createElement("span");
  fechaDia.textContent = item.fecha.getDate() + 1;
  fechaDia.classList.add("d-block", "mx-1");

  const titulo = document.createElement("h5");
  titulo.textContent = item.titulo;
  titulo.classList.add("font-weight-medium", "mt-3");

  const titleLink = document.createElement("a");
  titleLink.href = `./eventos/detail/${item.id}.html`;
  titleLink.classList.add("text-decoration-none", "link");

  const descripcion = document.createElement("p");
  descripcion.textContent = item.descripcion;
  descripcion.classList.add("mt-3");

  itemContainer.appendChild(cardContainer);
  cardContainer.appendChild(link);
  link.appendChild(img);
  cardContainer.appendChild(fechaContainer);

  fechaContainer.appendChild(fechaMes);
  fechaContainer.appendChild(fechaDia);
  cardContainer.appendChild(titulo);
  titulo.appendChild(titleLink);
  cardContainer.appendChild(descripcion);
  eventosContainer.appendChild(itemContainer);
});
