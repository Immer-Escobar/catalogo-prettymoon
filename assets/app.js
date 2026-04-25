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
    nombre: "Liquid Blush",
    categoria: "rostro",
    descripcion: "Rubor liquido de larga duracion que se difumina facil y deja un acabado natural irresistible.",
    precio: "$14.00",
    emoji: "💄"
  },
  {
    id: 2,
    nombre: "Lip Lacquer",
    categoria: "labios",
    descripcion: "Brillo intenso con color irresistible y efecto jugoso que realza tus labios al instante.",
    precio: "$7.00",
    emoji: "💋"
  },
  {
    id: 3,
    nombre: "Blush en Polvo",
    categoria: "rostro",
    descripcion: "Color suave y moldeable que realza tus mejillas con un acabado natural y duradero.",
    precio: "$8.50",
    emoji: "🧴"
  },
  {
    id: 4,
    nombre: "Multi-Stick",
    categoria: "rostro",
    descripcion: "3-1 para labios, mejillas y ojos, facil de aplicar y perfecto para retoques rapidos.",
    precio: "$10.00",
    emoji: "✨"
  },
  {
    id: 5,
    nombre: "Contorno Liquido",
    categoria: "rostro",
    descripcion: "Define, esculpe y da calidez con acabado natural y larga duracion.",
    precio: "$14.00",
    emoji: "🎨"
  },
  {
    id: 6,
    nombre: "Tintas",
    categoria: "labios",
    descripcion: "Color ligero que se fija por horas y deja un acabado natural sin resecar.",
    precio: "$12.00",
    emoji: "🖊️"
  },
  {
    id: 7,
    nombre: "Shimmer Lip Oil",
    categoria: "labios",
    descripcion: "Brillo con destellos que hidrata y dejas tus labios suaves, jugosos e irresistibles.",
    precio: "$14.00",
    emoji: "👁️"
  },
  {
    id: 8,
    nombre: "Halo Glow Blush",
    categoria: "rostro",
    descripcion: "Rubor luminoso que da color y glow natural al instante.",
    precio: "$13.00",
    emoji: "🍑"
  },
  {
    id: 9,
    nombre: "Camo Concealer",
    categoria: "rostro",
    descripcion: "Cobertura alta con hidratacion que suaviza e ilumina al instante.",
    precio: "$14.00",
    emoji: "🌸"
  },
  {
    id: 10,
    nombre: "Correctores",
    categoria: "rostro",
    descripcion: "Neutraliza imperfecciones y unifica el tono para una piel mas uniforme.",
    precio: "$10.00",
    emoji: "🍑"
  },
  {
    id: 11,
    nombre: "Delineador Liquido",
    categoria: "ojos",
    descripcion: "Trazo preciso y negro intenso que dura todo el dia sin correrse.",
    precio: "$5.00",
    emoji: "🖊️"
  },
  {
    id: 12,
    nombre: "Delineador Punta Plumon",
    categoria: "ojos",
    descripcion: "Trazo facil, preciso y sin esfuerzo.",
    precio: "$7.50",
    emoji: "🖊️"
  },
  {
    id: 13,
    nombre: "Exfoliante para labios",
    categoria: "skin",
    descripcion: "Exfolia y dejas tus labios suaves al instante.",
    precio: "$8.00",
    emoji: "🖊️"
  },
  {
    id: 14,
    nombre: "Gel para Cejas",
    categoria: "ojos",
    descripcion: "Fija y define tus cejas con acabado natural y duradero.",
    precio: "$5.00",
    emoji: "🖊️"
  },
  {
    id: 15,
    nombre: "HD Powder",
    categoria: "rostro",
    descripcion: "Sella y suaviza con acabado mate y efecto filtro.",
    precio: "$13.00",
    emoji: "🖊️"
  },
  {
    id: 16,
    nombre: "Halo Glow Highlight",
    categoria: "rostro",
    descripcion: "Iluminar liquido que aporta radiante al instante.",
    precio: "$13.00",
    emoji: "🖊️"
  },
  {
    id: 17,
    nombre: "Lip Oil",
    categoria: "labios",
    descripcion: "Hidratacion ligera con brillo jugoso para labios suaves al instante.",
    precio: "$14.00",
    emoji: "🖊️"
  },
  {
    id: 18,
    nombre: "Lapiz de Cejas",
    categoria: "ojos",
    descripcion: "Define y rellena con trazos precisos para cejas naturales.",
    precio: "$6.50",
    emoji: "🖊️"
  },
  {
    id: 19,
    nombre: "Lash-n-Roll",
    categoria: "ojos",
    descripcion: "Riza y alarga tus pestañas con efecto lifting que dura todo el dia.",
    precio: "$12.00",
    emoji: "🖊️"
  },
  {
    id: 20,
    nombre: "16HR Camo Concealer",
    categoria: "rostro",
    descripcion: "Cobertura completa que dura hasta 16 horas sin moverse.",
    precio: "$14.00",
    emoji: "🖊️"
  },
  {
    id: 21,
    nombre: "Mini Bite Eyeshadow",
    categoria: "ojos",
    descripcion: "Sombras compactas con alta pigmentacion para looks rapidos y perfectos.",
    precio: "$8.00",
    emoji: "🖊️"
  },
  {
    id: 22,
    nombre: "Big Mode",
    categoria: "ojos",
    descripcion: "Volumen intenso y pestañas impactantes en una sola aplicacion.",
    precio: "$8.00",
    emoji: "🖊️"
  },
  {
    id: 23,
    nombre: "Mist&set",
    categoria: "skin",
    descripcion: "Fija tu maquillaje y prolonga su duracion con acabado fresco.",
    precio: "$13.00",
    emoji: "🖊️"
  },
  {
    id: 24,
    nombre: "Finishing Powder",
    categoria: "rostro",
    descripcion: "Sella y perfecciona con un acabado suave y natural.",
    precio: "$8.50",
    emoji: "🖊️"
  },
  {
    id: 25,
    nombre: "Power Grip Primer",
    categoria: "skin",
    descripcion: "Fija el maquillaje y lo mantiene intacto por horas.",
    precio: "$15.00",
    emoji: "🖊️"
  },
  {
    id: 26,
    nombre: "Power Grip Primer Niacinamide",
    categoria: "skin",
    descripcion: "Fijacion potente con niacinamida que deja la piel suave y luminosa.",
    precio: "$15.00",
    emoji: "🖊️"
  },
  {
    id: 27,
    nombre: "Putty Blush",
    categoria: "rostro",
    descripcion: "Color cremoso que se difumina facil y deja un acabado natural.",
    precio: "$13.00",
    emoji: "🖊️"
  },
  {
    id: 28,
    nombre: "Soft Glam Foundation",
    categoria: "rostro",
    descripcion: "Base ligera que unifica el tono con acabado suave y natural.",
    precio: "$15.00",
    emoji: "🖊️"
  },
  {
    id: 29,
    nombre: "Soft Glam Consealer",
    categoria: "rostro",
    descripcion: "Corrige e ilumina con acabado suave y natural.",
    precio: "$12.00",
    emoji: "🖊️"
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