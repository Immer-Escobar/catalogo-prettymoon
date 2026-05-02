// ============================================
// TU NÚMERO DE WHATSAPP
// ============================================
const WHATSAPP = "50379443225";

// ============================================
// LISTA DE PRODUCTOS
// ============================================
const productos = [
  {
    id: 1,
    nombre: "Liquid Blush",
    categoria: "rostro",
    descripcion: "Rubor liquido de larga duracion que se difumina facil y deja un acabado natural irresistible.",
    precio: "$14.00",
    img: [
      "img/Suave muave.jpg",
      "img/Berry well.jpg",
      "img/Cheeky lychee.jpg",
      "img/pink promise.jpg"
    ],
    colores: ["Suave Muave", "Berry Well", "Cheeky Lychee", "Pink Promise"],
    agotado: [false, false, false, false]
  },
  {
    id: 2,
    nombre: "Lip Lacquer",
    categoria: "labios",
    descripcion: "Brillo intenso con color irresistible y efecto jugoso que realza tus labios al instante.",
    precio: "$7.00",
    img: ["img/Cherry bomb.jpg", "img/Moody.jpg", "img/Black cherry.jpg"],
    colores: ["Cherry Bomb", "Moody", "Black Cherry"],
    agotado: [false, true, false]
  },
  {
    id: 3,
    nombre: "Blush en Polvo",
    categoria: "rostro",
    descripcion: "Color suave y moldeable que realza tus mejillas con un acabado natural y duradero.",
    precio: "$8.50",
    img: ["img/Bright pink.jpg", "img/Blushing.jpg"],
    colores: ["Bright Pink", "Blushing"],
    agotado: [false, false]
  },
  {
    id: 4,
    nombre: "Multi-Stick",
    categoria: "rostro",
    descripcion: "3-1 para labios, mejillas y ojos, facil de aplicar y perfecto para retoques rapidos.",
    precio: "$10.00",
    img: ["img/Bronzed cherry.jpg", "img/Sparkling rose.jpg", "img/Luminous berry.jpg", "img/Multistick Glimmering Guava.jpg"],
    colores: ["Bronzed Cherry", "Sparkling Rose", "Luminous Berry", "Glimmering Guava"],
    agotado: [false, false, false, false]
  },
  {
    id: 5,
    nombre: "Contorno Liquido",
    categoria: "rostro",
    descripcion: "Define, esculpe y da calidez con acabado natural y larga duracion.",
    precio: "$14.00",
    img: ["img/Camo contorno.jpg"],
    colores: ["3 Light"],
    agotado: [false]
  },
  {
    id: 6,
    nombre: "Tintas",
    categoria: "labios",
    descripcion: "Color ligero que se fija por horas y deja un acabado natural sin resecar.",
    precio: "$12.00",
    img: ["img/Left on red tinta.jpg", "img/Cherry Cola tinta.jpg", "img/Plums up tinta.jpg", "img/Pink positive tinta.jpg"],
    colores: ["Left On Red", "Cherry Cola", "Plums Up", "Pink Positive"],
    agotado: [false, false, false, false]
  },
  {
    id: 7,
    nombre: "Shimmer Lip Oil",
    categoria: "labios",
    descripcion: "Brillo con destellos que hidrata y dejas tus labios suaves, jugosos e irresistibles.",
    precio: "$14.00",
    img: ["img/Super Neutral.jpg", "img/Citrine glam.jpg", "img/milky pink.jpg"],
    colores: ["Super Neutral", "Citrine Glam", "Milky Pink"],
    agotado: [false, false, false]
  },
  {
    id: 8,
    nombre: "Halo Glow Blush",
    categoria: "rostro",
    descripcion: "Rubor luminoso que da color y glow natural al instante.",
    precio: "$13.00",
    img: ["img/Cocoa BLUSH.jpg"],
    colores: ["Cocoa"],
    agotado: [false]
  },
  {
    id: 9,
    nombre: "Camo Concealer",
    categoria: "rostro",
    descripcion: "Cobertura alta con hidratacion que suaviza e ilumina al instante.",
    precio: "$14.00",
    img: ["img/Corrector.jpg"],
    colores: ["Camo"],
    agotado: [false]
  },
  {
    id: 10,
    nombre: "Correctores",
    categoria: "rostro",
    descripcion: "Neutraliza imperfecciones y unifica el tono para una piel mas uniforme.",
    precio: "$10.00",
    img: ["img/corrector amarillo.jpg", "img/Corrector naranja.jpg", "img/Corrector peach.jpg"],
    colores: ["Amarillo", "Naranja", "Peach"],
    agotado: [false, false, false]
  },
  {
    id: 11,
    nombre: "Delineador Liquido",
    categoria: "ojos",
    descripcion: "Trazo preciso y negro intenso que dura todo el dia sin correrse.",
    precio: "$5.00",
    img: ["img/Delineador.jpg"],
    colores: ["Negro"],
    agotado: [false]
  },
  {
    id: 12,
    nombre: "Delineador Punta Plumon",
    categoria: "ojos",
    descripcion: "Trazo facil, preciso y sin esfuerzo.",
    precio: "$7.50",
    img: ["img/Delinear plumon.jpg"],
    colores: ["Negro"],
    agotado: [false]
  },
  {
    id: 13,
    nombre: "Exfoliante para labios",
    categoria: "skin",
    descripcion: "Exfolia y dejas tus labios suaves al instante.",
    precio: "$8.00",
    img: ["img/Exfoliante de labios - Brown sugar.jpg"],
    colores: ["Brown Sugar"],
    agotado: [false]
  },
  {
    id: 14,
    nombre: "Gel para Cejas",
    categoria: "ojos",
    descripcion: "Fija y define tus cejas con acabado natural y duradero.",
    precio: "$5.00",
    img: ["img/Gel de cejas.jpg"],
    colores: ["Clear"],
    agotado: [false]
  },
  {
    id: 15,
    nombre: "HD Powder",
    categoria: "rostro",
    descripcion: "Sella y suaviza con acabado mate y efecto filtro.",
    precio: "$13.00",
    img: ["img/HD powder - Soft Luminance.jpg", "img/HD powder- Traslucido.jpg"],
    colores: ["Soft Luminance", "Traslucido"],
    agotado: [false, false]
  },
  {
    id: 16,
    nombre: "Halo Glow Highlight",
    categoria: "rostro",
    descripcion: "Iluminar liquido que aporta radiante al instante.",
    precio: "$13.00",
    img: ["img/Iluminador Pink prism.jpg"],
    colores: ["Pink Prism"],
    agotado: [false]
  },
  {
    id: 17,
    nombre: "Lip Oil",
    categoria: "labios",
    descripcion: "Hidratacion ligera con brillo jugoso para labios suaves al instante.",
    precio: "$14.00",
    img: ["img/Jam session.jpg", "img/money mauve.jpg", "img/Rich brown.jpg", "img/Rose envy.jpg", "img/red delicious.jpg"],
    colores: ["Jam Session", "Money Mauve", "Rich Brown", "Rose Envy", "Red Delicious"],
    agotado: [false, false, false, false, false]
  },
  {
    id: 18,
    nombre: "Lapiz de Cejas",
    categoria: "ojos",
    descripcion: "Define y rellena con trazos precisos para cejas naturales.",
    precio: "$6.50",
    img: ["img/Lapiz de ceja.jpg"],
    colores: ["Neutral Brown"],
    agotado: [false]
  },
  {
    id: 19,
    nombre: "Lash-n-Roll",
    categoria: "ojos",
    descripcion: "Riza y alarga tus pestañas con efecto lifting que dura todo el dia.",
    precio: "$12.00",
    img: ["img/Mascara grande.jpg"],
    colores: ["Negro"],
    agotado: [false]
  },
  {
    id: 20,
    nombre: "16HR Camo Concealer",
    categoria: "rostro",
    descripcion: "Cobertura completa que dura hasta 16 horas sin moverse.",
    precio: "$14.00",
    img: ["img/16 Concealer.jpg.jpeg"],
    colores: ["Camo"],
    agotado: [false]
  },
  {
    id: 21,
    nombre: "Mini Bite Eyeshadow",
    categoria: "ojos",
    descripcion: "Sombras compactas con alta pigmentacion para looks rapidos y perfectos.",
    precio: "$8.00",
    img: ["img/Mini bite Eyeshadow- Truffles.jpg"],
    colores: ["Truffles"],
    agotado: [false]
  },
  {
    id: 22,
    nombre: "Big Mode",
    categoria: "ojos",
    descripcion: "Volumen intenso y pestañas impactantes en una sola aplicacion.",
    precio: "$8.00",
    img: ["img/Mini mascara.jpg"],
    colores: ["Negro"],
    agotado: [false]
  },
  {
    id: 23,
    nombre: "Mist&set",
    categoria: "skin",
    descripcion: "Fija tu maquillaje y prolonga su duracion con acabado fresco.",
    precio: "$13.00",
    img: ["img/Mist & Set - 60 ml.jpg"],
    colores: ["Clear"],
    agotado: [false]
  },
  {
    id: 24,
    nombre: "Finishing Powder",
    categoria: "rostro",
    descripcion: "Sella y perfecciona con un acabado suave y natural.",
    precio: "$8.50",
    img: ["img/Polvos LM.jpg", "img/Polvos sheer.jpg"],
    colores: ["Light Medium", "Sheer"],
    agotado: [false, false]
  },
  {
    id: 25,
    nombre: "Power Grip Primer",
    categoria: "skin",
    descripcion: "Fija el maquillaje y lo mantiene intacto por horas.",
    precio: "$15.00",
    img: ["img/Power Grip primer.jpg"],
    colores: ["Clear"],
    agotado: [false]
  },
  {
    id: 26,
    nombre: "Power Grip Primer Niacinamide",
    categoria: "skin",
    descripcion: "Fijacion potente con niacinamida que deja la piel suave y luminosa.",
    precio: "$15.00",
    img: ["img/Primer Niacinamida.jpg"],
    colores: ["Clear"],
    agotado: [false]
  },
  {
    id: 27,
    nombre: "Putty Blush",
    categoria: "rostro",
    descripcion: "Color cremoso que se difumina facil y deja un acabado natural.",
    precio: "$13.00",
    img: ["img/Putty Blush.jpg"],
    colores: ["Belize"],
    agotado: [true]
  },
  {
    id: 28,
    nombre: "Soft Glam Foundation",
    categoria: "rostro",
    descripcion: "Base ligera que unifica el tono con acabado suave y natural.",
    precio: "$15.00",
    img: ["img/Base 24 Medium Neutral.jpg"],
    colores: ["24 Medium Neutral"],
    agotado: [false]
  },
  {
    id: 29,
    nombre: "Soft Glam Concealer",
    categoria: "rostro",
    descripcion: "Corrige e ilumina con acabado suave y natural.",
    precio: "$12.00",
    img: ["img/21 Light neutral.jpg"],
    colores: ["21 Light Neutral"],
    agotado: [false]
  }
];

// ============================================
// FUNCIÓN: Construir el mensaje de WhatsApp
// ============================================
function mensajeWhatsApp(nombre, precio, color) {
  const texto = `Hola Pretty Moon! 💜 Me interesa el producto *${nombre}* en tono *${color}* (${precio}). ¿Esta disponible?`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
}

// ============================================
// FUNCIÓN: Crear el HTML de una tarjeta
// ============================================
function crearTarjeta(producto) {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  const tieneCarrusel = producto.img.length > 1;
  const carruselId = `carrusel-${producto.id}`;

  // El primer color está agotado?
  const primerColorAgotado = producto.agotado[0];
  // Todo el producto está agotado? (todos los colores agotados)
  const todoAgotado = producto.agotado.every(a => a === true);

  // Construir los slides
  const slides = producto.img.map((src, i) => `
    <div class="carousel-item ${i === 0 ? 'active' : ''}">
      <img src="${src}" class="tarjeta-imagen" alt="${producto.nombre}" />
    </div>
  `).join("");

  // Construir los puntitos
  const puntitos = producto.img.map((_, i) => `
    <button type="button"
      data-bs-target="#${carruselId}"
      data-bs-slide-to="${i}"
      class="${i === 0 ? 'active' : ''}"
      aria-current="${i === 0 ? 'true' : 'false'}">
    </button>
  `).join("");

  // Flechas solo si hay más de una imagen
  const flechas = tieneCarrusel ? `
    <button class="carousel-control-prev" type="button"
      data-bs-target="#${carruselId}" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button"
      data-bs-target="#${carruselId}" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  ` : "";

  // Indicadores solo si hay más de una imagen
  const indicadores = tieneCarrusel ? `
    <div class="carousel-indicators">${puntitos}</div>
  ` : "";

  tarjeta.innerHTML = `
    <div id="${carruselId}" class="carousel slide" data-bs-ride="${todoAgotado ? 'false' : 'carousel'}" data-bs-interval="${4000 + (producto.id % 3) * 1000}">
      ${indicadores}
      <div class="carousel-inner">
        ${slides}
      </div>
      <div class="sold-out-badge-color" style="display:${primerColorAgotado ? 'flex' : 'none'}">Sold Out</div>
      ${flechas}
      ${todoAgotado ? '<div class="sold-out-badge">Sold Out</div>' : ''}
    </div>
    <div class="etiqueta-color">${producto.colores[0]}</div>
    <div class="tarjeta-cuerpo">
      <span class="tag-categoria">${producto.categoria}</span>
      <h2 class="nombre-producto">${producto.nombre}</h2>
      <p class="descripcion-producto">${producto.descripcion}</p>
      <p class="precio-producto">${producto.precio}</p>
      <a class="btn-whatsapp ${primerColorAgotado ? 'btn-agotado' : ''}"
        href="${primerColorAgotado ? '#' : mensajeWhatsApp(producto.nombre, producto.precio, producto.colores[0])}"
        id="btn-wa-${producto.id}"
        target="_blank"
        rel="noopener noreferrer">
        ${primerColorAgotado ? 'Agotado' : 'Pedir por WhatsApp'}
      </a>
    </div>
  `;

  // Actualizar etiqueta y botón al cambiar slide
  const etiqueta = tarjeta.querySelector(".etiqueta-color");
  const badgeSoldOut = tarjeta.querySelector(".sold-out-badge-color");

  tarjeta.querySelector(`#${carruselId}`).addEventListener("slide.bs.carousel", (e) => {
    etiqueta.textContent = producto.colores[e.to];
    const btnWa = tarjeta.querySelector(`#btn-wa-${producto.id}`);

    if (producto.agotado[e.to]) {
      badgeSoldOut.style.display = "flex";
      btnWa.classList.add("btn-agotado");
      btnWa.href = "#";
      btnWa.textContent = "Agotado";
    } else {
      badgeSoldOut.style.display = "none";
      btnWa.classList.remove("btn-agotado");
      btnWa.href = mensajeWhatsApp(producto.nombre, producto.precio, producto.colores[e.to]);
      btnWa.textContent = "Pedir por WhatsApp";
    }
  });

  return tarjeta;
}

// ============================================
// FUNCIÓN: Mostrar productos según categoría
// ============================================
function mostrarProductos(categoriaFiltro) {
  const grid = document.getElementById("grid-productos");
  grid.innerHTML = "";

  const filtrados = categoriaFiltro === "todos"
    ? productos
    : productos.filter(p => p.categoria === categoriaFiltro);

  if (filtrados.length === 0) {
    grid.innerHTML = `<p class="sin-resultados">No hay productos en esta categoría aún.</p>`;
    return;
  }

  filtrados.forEach((producto, index) => {
    const tarjeta = crearTarjeta(producto);
    tarjeta.style.animationDelay = `${index * 0.15}s`;
    grid.appendChild(tarjeta);
  });

  // Reinicializar carruseles de Bootstrap
  const carruseles = document.querySelectorAll(".carousel");
  carruseles.forEach(el => {
    new bootstrap.Carousel(el, {
      interval: parseInt(el.dataset.bsInterval) || 5000,
      ride: "carousel"
    });
  });
}

// ============================================
// FUNCIÓN: Configurar los botones de filtro
// ============================================
function configurarFiltros() {
  const botones = document.querySelectorAll(".filtro");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      botones.forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");
      mostrarProductos(boton.dataset.categoria);
    });
  });

  // Dropdown móvil
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
      dropdownItems.forEach(i => i.classList.remove("activo-dropdown"));
      item.classList.add("activo-dropdown");
      mostrarProductos(item.dataset.categoria);
    });
  });
}

// ============================================
// INICIO
// ============================================
configurarFiltros();
mostrarProductos("todos");

// Abrir modal de bienvenida
const modalBienvenida = new bootstrap.Modal(document.getElementById("modalBienvenida"));
modalBienvenida.show();

// Configurar enlace de WhatsApp en el footer
document.querySelector(".footer-whatsapp").href = `https://wa.me/${WHATSAPP}`;

// Botón volver arriba
const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnArriba.classList.add("visible");
  } else {
    btnArriba.classList.remove("visible");
  }
});

btnArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});