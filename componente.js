function crearCard(titulo, descripcion, imagenUrl) {
  const card = document.createElement("div");
  card.className = "mi-card";

  card.innerHTML = `
    <img src="${imagenUrl}" alt="${titulo}" class="mi-card-img">
    <div class="mi-card-cuerpo">
      <h3 class="mi-card-titulo">${titulo}</h3>
      <p class="mi-card-descripcion">${descripcion}</p>
      <button class="mi-card-boton">Ver más</button>
    </div>
  `;

  return card;
}

// Crear cards y agregarlas al contenedor
window.onload = function () {
  const contenedor = document.getElementById("contenedor-cards");

  const cards = [
    {
      titulo: "Noticia: Agua en Marte",
      descripcion: "La NASA encuentra indicios de agua en el planeta rojo.",
      imagenUrl: "https://images.ecestaticos.com/VfE8F3y6F-Ja3gS3NOBXBS0Z-EI=/0x114:1022x649/600x315/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F820%2F611%2Fa60%2F820611a60657199278142701d83af324.jpg"
    },
    {
      titulo: "Perfil Profesional",
      descripcion: "Juan Hernández - Frontend Developer apasionada por el diseño.",
      imagenUrl: "https://cdn.prod.website-files.com/632a406bba53c60f9ca58a26/65cff24e18a33e51eda1fc67_Blog%20-%20Fotografi%CC%81a%20de%20marca%20personal%20para%20tu%20sitio%20web%20y%20material%20promocional_TT.jpg"
    },
    {
      titulo: "Producto: Tenis Urbanos",
      descripcion: "Cómodos, modernos y perfectos para el día a día.",
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_685841-MLM81873895773_012025-O.webp"
    }
  ];

  // Recorrer y crear cada card
  cards.forEach(cardData => {
    const card = crearCard(cardData.titulo, cardData.descripcion, cardData.imagenUrl);
    contenedor.appendChild(card);
  });
};
