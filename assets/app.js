// ============================================
// Constantes globales
// ============================================
const WHATSAPP = "50379443225";
let categoriaActual = "todos";
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let productoEnModal = null;

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
    agotado: [true, false, false, true]
  },
  {
    id: 2,
    nombre: "Lip Lacquer",
    categoria: "labios",
    descripcion: "Te da un brillo intenso con color irresistible y efecto jugoso que realza tus labios al instante.",
    precio: "$7.00",
    img: ["img/Cherry bomb.jpg", 
          "img/Moody.jpg", 
          "img/Black cherry.jpg"],
    colores: ["Cherry Bomb", "Moody", "Black Cherry"],
    agotado: [false, true, false]
  },
  {
    id: 3,
    nombre: "Blush en Polvo",
    categoria: "rostro",
    descripcion: "Color suave y moldeable que realza tus mejillas con un acabado natural y duradero.",
    precio: "$8.50",
    img: ["img/Bright pink.jpg", 
          "img/Blushing.jpg"],
    colores: ["Bright Pink", "Blushing"],
    agotado: [false, true]
  },
  {
    id: 4,
    nombre: "Multi-Stick",
    categoria: "rostro",
    descripcion: "3-1 para labios, mejillas y ojos, facil de aplicar y perfecto para retoques rapidos.  ",
    precio: "$10.00",
    img: ["img/Bronzed cherry.jpg", 
          "img/Sparkling rose.jpg", 
          "img/Luminous berry.jpg", 
          "img/Multistick Glimmering Guava.jpg"],
    colores: ["Bronzed Cherry", "Sparkling Rose", "Luminous Berry", "Glimmering Guava"],
    agotado: [true, true, false, false]
  },
  {
    id: 5,
    nombre: "Contorno Liquido",
    categoria: "rostro",
    descripcion: "Define, esculpe y da calidez con acabado natural y larga duracion.",
    precio: "$14.00",
    img: ["img/Camo contorno.jpg"],
    colores: ["3 Light"],
    agotado: [true]
  },
  {
    id: 6,
    nombre: "Tintas",
    categoria: "labios",
    descripcion: "Color ligero que se fija por horas y deja un acabado natural sin resecar.",
    precio: "$12.00",
    img: ["img/Left on red tinta.jpg", 
          "img/Cherry Cola tinta.jpg", 
          "img/Plums up tinta.jpg", 
          "img/Pink positive tinta.jpg"],
    colores: ["Left On Red", "Cherry Cola", "Plums Up", "Pink Positive"],
    agotado: [false, false, false, false]
  },
  {
    id: 7,
    nombre: "Shimmer Lip Oil",
    categoria: "labios",
    descripcion: "Brillo con destellos que hidrata y dejas tus labios suaves, jugosos e irresistibles.",
    precio: "$14.00",
    img: ["img/Super Neutral.jpg", 
          "img/Citrine glam.jpg", 
          "img/milky pink.jpg"],
    colores: ["Super Neutral", "Citrine Glam", "Milky Pink"],
    agotado: [true, true, true]
  },
  {
    id: 8,
    nombre: "Halo Glow Blush",
    categoria: "rostro",
    descripcion: "Rubor luminoso que da color y glow natural al instante.",
    precio: "$13.00",
    img: ["img/Cocoa BLUSH.jpg"],
    colores: ["Cocoa"],
    agotado: [true]
  },
  {
    id: 9,
    nombre: "Camo Concealer",
    categoria: "rostro",
    descripcion: "Cobertura alta con hidratacion que suaviza e ilumina al instante.",
    precio: "$14.00",
    img: ["img/Corrector.jpg",
          "img/Light Ivory.jpg",
          "img/Medium Sand.jpg",
          "img/Light Sand.jpg",
          "img/Light Peach.jpg"],
    colores: ["Medium Peach", "Light Ivory", "Medium Sand", "Light Sand", "Light Peach"],
    agotado: [false, false, false, true, true]
  },
  {
    id: 10,
    nombre: "Correctores",
    categoria: "rostro",
    descripcion: "Neutraliza imperfecciones y unifica el tono para una piel mas uniforme.",
    precio: "$10.00",
    img: ["img/corrector amarillo.jpg", 
          "img/Corrector naranja.jpg", 
          "img/Corrector peach.jpg"],
    colores: ["Amarillo", "Naranja", "Peach"],
    agotado: [false, true, false]
  },
  {
    id: 11,
    nombre: "Delineador Liquido",
    categoria: "ojos",
    descripcion: "Trazo preciso y negro intenso que dura todo el dia sin correrse.",
    precio: "$5.00",
    img: ["img/Delineador.jpg"],
    colores: ["Negro"],
    agotado: [true]
  },
  {
    id: 12,
    nombre: "Delineador Punta Plumon",
    categoria: "ojos",
    descripcion: "Trazo facil, preciso y sin esfuerzo.",
    precio: "$7.50",
    img: ["img/Delinear plumon.jpg"],
    colores: ["Negro"],
    agotado: [true]
  },
  {
    id: 13,
    nombre: "Exfoliante para labios",
    categoria: "skin",
    descripcion: "Exfolia y dejas tus labios suaves al instante.",
    precio: "$8.00",
    img: ["img/Exfoliante de labios - Brown sugar.jpg"],
    colores: ["Brown Sugar"],
    agotado: [true]
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
    img: ["img/HD powder - Soft Luminance.jpg", 
          "img/HD powder- Traslucido.jpg"],
    colores: ["Soft Luminance", "Traslucido"],
    agotado: [true, true]
  },
  {
    id: 16,
    nombre: "Halo Glow Highlight",
    categoria: "rostro",
    descripcion: "Iluminar liquido que aporta radiante al instante.",
    precio: "$13.00",
    img: ["img/Iluminador Pink prism.jpg"],
    colores: ["Pink Prism"],
    agotado: [true]
  },
  {
    id: 17,
    nombre: "Lip Oil",
    categoria: "labios",
    descripcion: "Hidratacion ligera con brillo jugoso para labios suaves al instante.",
    precio: "$14.00",
    img: ["img/Jam session.jpg", 
          "img/money mauve.jpg", 
          "img/Rich brown.jpg", 
          "img/Rose envy.jpg", 
          "img/red delicious.jpg"],
    colores: ["Jam Session", "Money Mauve", "Rich Brown", "Rose Envy", "Red Delicious"],
    agotado: [false, true, true, false, true]
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
    agotado: [true]
  },
  {
    id: 21,
    nombre: "Mini Bite Eyeshadow",
    categoria: "ojos",
    descripcion: "Sombras compactas con alta pigmentacion para looks rapidos y perfectos.",
    precio: "$8.00",
    img: ["img/Mini bite Eyeshadow- Truffles.jpg"],
    colores: ["Truffles"],
    agotado: [true]
  },
  {
    id: 22,
    nombre: "Big Mood",
    categoria: "ojos",
    descripcion: "Volumen intenso y pestañas impactantes en una sola aplicacion.",
    precio: "$8.00",
    img: ["img/Mini mascara.jpg"],
    colores: ["Negro"],
    agotado: [true]
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
    img: ["img/Polvos LM.jpg", 
          "img/Polvos sheer.jpg"],
    colores: ["Light Medium", "Sheer"],
    agotado: [true, false]
  },
  {
    id: 25,
    nombre: "Power Grip Primer",
    categoria: "skin",
    descripcion: "Fija el maquillaje y lo mantiene intacto por horas.",
    precio: "$15.00",
    img: ["img/Power Grip primer.jpg"],
    colores: ["Clear"],
    agotado: [true]
  },
  {
    id: 26,
    nombre: "Power Grip Primer Niacinamide",
    categoria: "skin",
    descripcion: "Fijacion potente con niacinamida que deja la piel suave y luminosa.",
    precio: "$15.00",
    img: ["img/Primer Niacinamida.jpg"],
    colores: ["Clear"],
    agotado: [true]
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
    agotado: [true]
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
  },
  {
    id:30,
    nombre: "Halo Glow Setting Powder",
    categoria: "rostro",
    descripcion: "Sella tu maquillaje con un acabado luminoso, logrando una mayor duracion.",
    precio: "$16.00",
    img: ["img/Halo-settingPowder.jpeg"],
    colores: ["Fair Light"],
    agotado: [false]
  },
  {
    id:31,
    nombre: "Lash XTNDR",
    categoria: "ojos",
    descripcion: "Alarga y define tus pestañas para una mirada impactante.",
    precio: "$12.00",
    img: ["img/Lash-XTNDR.jpeg"],
    colores: ["Black"],
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
      <img src="${src}" class="tarjeta-imagen modal-trigger" 
      data-index="${i}"
      data-id="${producto.id}"
      alt="${producto.nombre}" />
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
      <div class="sold-out-badge-color" style="display:${primerColorAgotado ? 'flex' : 'none'}"></div>
      ${flechas}
      ${todoAgotado ? '<div class="sold-out-badge"></div>' : ''}
    </div>
    <div class="etiqueta-color">${producto.colores[0]}</div>
    <div class="tarjeta-cuerpo">
      <span class="tag-categoria">${producto.categoria}</span>
      <h2 class="nombre-producto">${producto.nombre}</h2>
      <p class="descripcion-producto">${producto.descripcion}</p>
      <p class="precio-producto">${producto.precio}</p>
      <button class="btn-whatsapp ${primerColorAgotado ? 'btn-agotado' : ''}"
        id="btn-wa-${producto.id}"
        onclick="agregarAlCarrito({
          nombre: '${producto.nombre}',
          precio: '${producto.precio}',
          color: '${producto.colores[0]}' // Nota: esto es estático, luego ajustaremos
        })">
        ${primerColorAgotado ? 'Agotado' : 'Agregar al Carrito'}
      </button>
    </div>
  `;

  // Actualizar etiqueta y botón al cambiar slide
  const etiqueta = tarjeta.querySelector(".etiqueta-color");
  const badgeSoldOut = tarjeta.querySelector(".sold-out-badge-color");

  tarjeta.querySelector(`#${carruselId}`).addEventListener("slide.bs.carousel", (e) => {
    etiqueta.textContent = producto.colores[e.to];
    const btnWa = tarjeta.querySelector(`#btn-wa-${producto.id}`);

    btnWa.onclick = () => {
      agregarAlCarrito({
        nombre: producto.nombre,
        precio: producto.precio,
        color: producto.colores[e.to]
      });
    };

    if (producto.agotado[e.to]) {
      badgeSoldOut.style.display = "flex";
      btnWa.classList.add("btn-agotado");
      btnWa.href = "#";
      btnWa.textContent = "Agotado";
    } else {
      badgeSoldOut.style.display = "none";
      btnWa.classList.remove("btn-agotado");
      btnWa.href = mensajeWhatsApp(producto.nombre, producto.precio, producto.colores[e.to]);
      btnWa.innerHTML = 'Agregar al Carrito';
    }
  });

  // Abrir modal al hacer clic en la imagen (solo móvil)
  tarjeta.querySelectorAll(".modal-trigger").forEach(img => {
    img.addEventListener("click", () => {
      if (window.innerWidth <= 600) {
        const indice = parseInt(img.dataset.index);
        abrirModalProducto(producto, indice);
      }
    });
  });

  return tarjeta;
}

// ============================================
// FUNCIÓN: Mostrar productos según categoría
// ============================================
function mostrarProductos(categoriaFiltro) {
  categoriaActual = categoriaFiltro;
  const grid = document.getElementById("grid-productos");
  grid.innerHTML = "";

  const filtrados = categoriaFiltro === "todos"
    ? productos
    : productos.filter(p => p.categoria === categoriaFiltro);

    const breadcrumb = document.getElementById("breadcrumbCategoria");

    if (categoriaFiltro !== "todos") {

      let nombreCategoria = "";

      switch(categoriaFiltro) {
        case "labios":
          nombreCategoria = "Labios";
          break;

        case "rostro":
          nombreCategoria = "Rostro";
          break;

        case "ojos":
          nombreCategoria = "Ojos";
          break;

        case "skin":
          nombreCategoria = "Skin Care";
          break;
      }

      breadcrumb.innerHTML = `/ ${nombreCategoria}`;

    } else {

      breadcrumb.innerHTML = "";
    }

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
      window.scrollTo({top: 0, behavior: "smooth"});
    });
  });

  // Dropdown móvil
  const dropdownItems = document.querySelectorAll(".dropdown-item, .filtro-pc-item");
  dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
      dropdownItems.forEach(i => i.classList.remove("activo-dropdown"));
      item.classList.add("activo-dropdown");
      mostrarProductos(item.dataset.categoria);
      window.scrollTo({top: 0, behavior: "smooth"});
    });
  });
}

// ============================================
// LOGO HOME
// ============================================

document.getElementById("logoHome").addEventListener("click", (e) => {

  e.preventDefault();

  // Si hay filtro activo → volver a todos
  if (categoriaActual !== "todos") {

    mostrarProductos("todos");

    // Reset botones PC
    document.querySelectorAll(".filtro").forEach(btn => {
      btn.classList.remove("activo");

      if (btn.dataset.categoria === "todos") {
        btn.classList.add("activo");
      }
    });

    // Reset dropdown móvil
    document.querySelectorAll(".dropdown-item").forEach(item => {
      item.classList.remove("activo-dropdown");

      if (item.dataset.categoria === "todos") {
        item.classList.add("activo-dropdown");
      }
    });

  } else {

    // Si ya está en todos → solo subir
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});

// ============================================
// INICIO
// ============================================
configurarFiltros();
mostrarProductos("todos");
actualizarUI();

// Abrir modal de bienvenida
const modalBienvenida = new bootstrap.Modal(document.getElementById("modalBienvenida"));
modalBienvenida.show();

// Configurar enlace de WhatsApp en el footer
const mensajeFooter = 'Hola Pretty Moon! 💜 Me gustaría obtener más información sobre tus productos.';
document.querySelector(".footer-whatsapp").href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensajeFooter)}`;

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

/*=================MODAL DEL PRODUCTO====================*/
function abrirModalProducto(producto,indiceColor){
  productoEnModal = producto; //Guardamos el producto actual
  const imgBox = document.getElementById("modalCarruselInner");
  imgBox.innerHTML = "";

  //Crear los slides del carrusel
  producto.img.forEach((src,index) => {
    imgBox.innerHTML += `
      <div class="carousel-item ${index === indiceColor ? 'active' : ''}">
        <img src="${src}" class="modal-producto-imagen" alt="${producto.nombre}"/>
      </div> `;
  });

  //Funcion interna para actualizar textos
  const actualizarInfo = (index) => {
    document.getElementById("modalProductoColor").textContent = producto.colores[index];
    const btnWa = document.getElementById("modalProductoBtn");
        
    if (producto.agotado[index]) {
      btnWa.textContent = "Agotado";
      btnWa.classList.add("btn-agotado");
      btnWa.href = "#";
    } else {
        btnWa.textContent = "Agregar al Carrito";
        btnWa.classList.remove("btn-agotado");
        btnWa.href = mensajeWhatsApp(producto.nombre, producto.precio, producto.colores[index]);
      }
  };

  //Cargar datos iniciales     
  document.getElementById("modalProductoCategoria").textContent = producto.categoria;
  document.getElementById("modalProductoNombre").textContent = producto.nombre;
  document.getElementById("modalProductoDescripcion").textContent = producto.descripcion;
  document.getElementById("modalProductoPrecio").textContent = producto.precio;
  actualizarInfo(indiceColor);

  //Inicializar y escuchar cambios del carrusel
  const modalElement = document.getElementById("modalProducto");
  const carruselElement = document.getElementById("modalProductoCarrusel");
  const carousel = new bootstrap.Carousel(carruselElement);
    
  carruselElement.addEventListener('slide.bs.carousel', (e) => {
    actualizarInfo(e.to); // e.to es el índice del nuevo slide
  });

  //Mostrar modal
  const modal = new bootstrap.Modal(document.getElementById("modalProducto"));
  modal.show();
}

function agregarDesdeModal() {
  if (!productoEnModal) return;

  //Obtenemos el color actual del carrusel del modal
  const carrusel = document.getElementById("modalProductoCarrusel");
  const activeItem = carrusel.querySelector(".carousel-item.active");
  const index = Array.from(carrusel.querySelectorAll(".carousel-item")).indexOf(activeItem);

  const productoParaCarrito = {
    nombre: productoEnModal.nombre,
    precio: productoEnModal.precio,
    color: productoEnModal.colores[index]
  };

  agregarAlCarrito(productoParaCarrito);
}

document.getElementById('modalProductoBtn').addEventListener('click', function() {
    agregarDesdeModal();
});


/*-------------CARRITOOOOOO----------------*/
function agregarAlCarrito(producto) {
  // Buscamos si existe un producto con el mismo nombre y color
  const IndiceExistente = carrito.findIndex(
    item => item.nombre === producto.nombre && item.color === producto.color
  );

  if (IndiceExistente !== -1){
     // Si existe, aumentamos la cantidad
     carrito[IndiceExistente].cantidad = (carrito[IndiceExistente].cantidad || 1) + 1;
  } else {
    // Si no existe, lo agregamos con cantidad 1
    producto.cantidad = 1;
    carrito.push(producto);
  }

  guardarCarrito();
  actualizarUI();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  actualizarUI();
}

//Se guarda en localStorage
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

//Generar mensaje de WhatsApp
function generarMensajeWhatsApp() {
  if (carrito.length === 0) return "";

  let mensaje = "Hola, Pretty Moon 💜✨\n";
  mensaje += "Me gustaría realizar el siguiente pedido:\n\n";

  let total = 0;

  carrito.forEach(item => { 
    let precioNumerico = parseFloat(item.precio.replace('$', ''));
    total += precioNumerico * item.cantidad;
    
    mensaje += ` 💜${item.nombre} (${item.color})\n`;
    mensaje += `  - Cantidad: ${item.cantidad}\n`;
    mensaje += `  - Precio: ${item.precio}\n\n`;
  });

  mensaje += ` Total: $${total.toFixed(2)}\n\n`;
  mensaje += `¿Podrían confirmarme la disponibilidad?⭐`;

  return mensaje;
}

function enviarPedido() {
  if(carrito.length === 0) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true
    });

    Toast.fire({
      icon: 'warning',
      title: 'Tu carrito esta vacio'
    });
    return;
  }

  const mensaje = generarMensajeWhatsApp();
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, '_blank');
}

document.getElementById('btn-enviar-pedido').addEventListener('click', function() {
  enviarPedido(); //Esta es la funcion ya creada
});

function actualizarUI() {
  // 1. Actualizar contador
  const contador = document.getElementById('contador-carrito');
  if (contador) {
    contador.innerText = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  }

  // 2. Renderizar lista en el modal
  const listaCarrito = document.getElementById('lista-carrito');
  if (!listaCarrito) return;

  if (carrito.length === 0) {
    listaCarrito.innerHTML = "<p class='text-center' style='color: var(--gris);'>Tu carrito esta vacio.</p>";
    return;
  }

  let html = '<div class="list-group list-group-flush">';
  carrito.forEach((item, index) => {
    // Si item.cantidad es undefined, usamos 1
    const cantidad = item.cantidad || 1; 
    html += `
      <div class="list-group-item">
        <div class="carrito-item-info">
          <p class="carrito-item-nombre">${item.nombre}</p>
          <p class="carrito-item-detalles">${item.color} | ${item.precio}</p>
        </div>
          <div class="carrito-controles">
            <button class="btn-cantidad" data-index="${index}" data-accion="-1">-</button>
            <span class="mx-2">${item.cantidad}</span>
            <button class="btn-cantidad" data-index="${index}" data-accion="1">+</button>
            <button class="btn-eliminar" data-index="${index}">
              <i class="bi bi-trash"></i>
            </button>
          </div>
      </div>
    `;
  });
  html += '</div>';
  listaCarrito.innerHTML = html;
}

document.addEventListener('click', function(e) {
  //Validar que e.target exista
   if(!e.target) return;

  // 2. Manejo de botones de cantidad (+ y -)
  if (e.target.classList && e.target.classList.contains('btn-cantidad')) {
    const index = parseInt(e.target.getAttribute('data-index'));
    const cambio = parseInt(e.target.getAttribute('data-accion'));
    cambiarCantidad(index, cambio);
  }

  //3.Manejo de boton eliminar
  // Usamos ?. para evitar errores si el elemento no tiene parentElement
  const btnEliminar = e.target.closest('.btn-eliminar');
  if (btnEliminar) {
    const index = parseInt(btnEliminar.getAttribute('data-index'));
    eliminarDelCarrito(index);
  }
});

function cambiarCantidad(index, cambio) {
  // Aseguramos que cantidad exista
  carrito[index].cantidad = (carrito[index].cantidad || 1) + cambio;
  
  // Si la cantidad llega a 0, lo eliminamos
  if (carrito[index].cantidad <= 0) {
    eliminarDelCarrito(index);
  } else {
    guardarCarrito();
    actualizarUI();
  }
}


