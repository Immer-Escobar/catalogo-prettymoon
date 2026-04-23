// ============================================
// TU NÚMERO DE WHATSAPP
// Cambia este número por el tuyo (con código de país, sin + ni espacios)
// El de El Salvador empieza con 503
// ============================================
const WHATSAPP = "+503#####";

// ============================================
// LISTA DE PRODUCTOS
// Para agregar un producto nuevo, copia un bloque { ... }
// y modifica los valores. ¡Es así de simple!
// ============================================
const productos = [
  {
    id: 1,
    nombre: "Labial Rojo Eterno",
    categoria: "labiales",
    descripcion: "Fórmula de larga duración con acabado cremoso. Hidrata y define tus labios.",
    precio: "$8.50",
    emoji: "💄"
  },
  {
    id: 2,
    nombre: "Labial Nude Sedoso",
    categoria: "labiales",
    descripcion: "Tono nude versátil para el día a día. Ultra pigmentado y suave.",
    precio: "$7.00",
    emoji: "💋"
  },
  {
    id: 3,
    nombre: "Base Cobertura Total",
    categoria: "bases",
    descripcion: "Cobertura completa con acabado natural. Disponible en 12 tonos.",
    precio: "$14.00",
    emoji: "🧴"
  },
  {
    id: 4,
    nombre: "Base Ligera con FPS 30",
    categoria: "bases",
    descripcion: "Cobertura ligera con protección solar. Ideal para uso diario.",
    precio: "$12.00",
    emoji: "✨"
  },
  {
    id: 5,
    nombre: "Paleta de Sombras Smoky",
    categoria: "ojos",
    descripcion: "12 tonos ahumados con fórmula de larga duración y alta pigmentación.",
    precio: "$18.00",
    emoji: "🎨"
  },
  {
    id: 6,
    nombre: "Delineador Negro Precision",
    categoria: "ojos",
    descripcion: "Punta ultra fina para trazos perfectos. Resistente al agua.",
    precio: "$6.50",
    emoji: "🖊️"
  },
  {
    id: 7,
    nombre: "Máscara de Pestañas Volumen",
    categoria: "ojos",
    descripcion: "Máxima longitud y volumen. Fórmula enriquecida con aceite de argán.",
    precio: "$9.00",
    emoji: "👁️"
  },
  {
    id: 8,
    nombre: "Rubor Melocotón Suave",
    categoria: "rubores",
    descripcion: "Tono durazno que aporta un look saludable y luminoso.",
    precio: "$10.00",
    emoji: "🍑"
  },
  {
    id: 9,
    nombre: "Rubor Coral Vibrante",
    categoria: "rubores",
    descripcion: "Fórmula en polvo buildable para personalizar la intensidad.",
    precio: "$10.00",
    emoji: "🌸"
  },
  {
    id: 10,
    nombre: "Sapito saltarin",
    categoria: "bases",
    descripcion: "Habia un sapo sapo que nadaba en el rio rio rioo.",
    precio: "$10.00",
    emoji: "🍑"
  }
];

// ============================================
// FUNCIÓN: Construir el mensaje de WhatsApp
// ============================================
function mensajeWhatsApp(nombre, precio) {
  const texto = `Hola! Me interesa el producto *${nombre}* (${precio}). ¿Está disponible?`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
}

// ============================================
// FUNCIÓN: Crear el HTML de una tarjeta
// ============================================
function crearTarjeta(producto) {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  tarjeta.innerHTML = `
    <div class="tarjeta-imagen">${producto.emoji}</div>
    <div class="tarjeta-cuerpo">
      <span class="tag-categoria">${producto.categoria}</span>
      <h2 class="nombre-producto">${producto.nombre}</h2>
      <p class="descripcion-producto">${producto.descripcion}</p>
      <p class="precio-producto">${producto.precio}</p>
      <a class="btn-whatsapp"
         href="${mensajeWhatsApp(producto.nombre, producto.precio)}"
         target="_blank"
         rel="noopener noreferrer">
        Pedir por WhatsApp
      </a>
    </div>
  `;

  return tarjeta;
}

// ============================================
// FUNCIÓN: Mostrar productos según categoría
// ============================================
function mostrarProductos(categoriaFiltro) {
  const grid = document.getElementById("grid-productos");
  grid.innerHTML = ""; // Limpiar la cuadrícula

  // Filtrar según la categoría seleccionada
  const filtrados = categoriaFiltro === "todos"
    ? productos
    : productos.filter(p => p.categoria === categoriaFiltro);

  if (filtrados.length === 0) {
    grid.innerHTML = `<p class="sin-resultados">No hay productos en esta categoría aún.</p>`;
    return;
  }

  // Agregar cada tarjeta al grid
  filtrados.forEach(producto => {
    grid.appendChild(crearTarjeta(producto));
  });
}

// ============================================
// FUNCIÓN: Configurar los botones de filtro
// ============================================
function configurarFiltros() {
  const botones = document.querySelectorAll(".filtro");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      // Quitar clase "activo" de todos los botones
      botones.forEach(b => b.classList.remove("activo"));
      // Poner clase "activo" en el botón clickeado
      boton.classList.add("activo");
      // Mostrar productos de la categoría seleccionada
      mostrarProductos(boton.dataset.categoria);
    });
  });
}

// ============================================
// INICIO — se ejecuta cuando carga la página
// ============================================
configurarFiltros();
mostrarProductos("todos");