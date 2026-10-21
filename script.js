
/* ============================================================
   JAVASCRIPT — Portafolio · Diseñadora Gráfica Freelance
   ============================================================
   Funcionalidades:
     1. Barra de navegación: fondo sólido al hacer scroll
     2. Menú móvil (hamburguesa) con apertura/cierre
     3. Animación de aparición al hacer scroll (IntersectionObserver)
     4. Contadores animados en la sección de métricas
     5. Formulario de contacto: validación + mensaje de confirmación
   Todo el código está comentado en español.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- 1. CABECERA: fondo sólido al hacer scroll ---------- */
  const cabecera = document.getElementById("cabecera");

  // "scrollY > 40" evita que el menú parpadee con scrolls mínimos
  const actualizarCabecera = () => {
    cabecera.classList.toggle("cabecera--solido", window.scrollY > 40);
  };
  window.addEventListener("scroll", actualizarCabecera, { passive: true });
  actualizarCabecera(); // estado inicial por si la página carga a mitad


  /* ---------- 2. MENÚ MÓVIL ---------- */
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  const cerrarMenu = () => {
    nav.classList.remove("nav--abierto");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
    document.body.style.overflow = ""; // permite volver a hacer scroll
  };

  toggle.addEventListener("click", () => {
    const abierto = nav.classList.toggle("nav--abierto");
    toggle.setAttribute("aria-expanded", String(abierto));
    toggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    // Bloquea el scroll de fondo mientras el menú ocupa la pantalla
    document.body.style.overflow = abierto ? "hidden" : "";
  });

  // Al pulsar cualquier enlace del menú, este se cierra automáticamente
  nav.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", cerrarMenu);
  });

  // Tecla Escape también cierra el menú (accesibilidad)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarMenu();
  });


  /* ---------- 3. ANIMACIÓN DE APARICIÓN (scroll reveal) ---------- */
  // IntersectionObserver avisa cuando un elemento entra en pantalla.
  // Es mucho más eficiente que escuchar scroll a mano.
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("aparece--visible");
        observador.unobserve(entrada.target); // se anima una sola vez
      }
    });
  }, { threshold: 0.15 }); // dispara cuando el 15% del elemento es visible

  document.querySelectorAll(".aparece").forEach((el) => observador.observe(el));


  /* ---------- 4. CONTADORES ANIMADOS ---------- */
  // Lee el objetivo del atributo data-contador y anima de 0 a ese número.
  const animarContador = (elemento) => {
    const objetivo = parseInt(elemento.dataset.contador, 10);
    const duracion = 1400;          // ms de duración de la animación
    const inicio = performance.now();

    const paso = (ahora) => {
      const progreso = Math.min((ahora - inicio) / duracion, 1);
      // easeOutCubic: desacelera al final, se siente natural
      const suavizado = 1 - Math.pow(1 - progreso, 3);
      elemento.textContent = Math.round(suavizado * objetivo) + "+";
      if (progreso < 1) requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  };

  const observadorContadores = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        animarContador(entrada.target);
        observadorContadores.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll("[data-contador]").forEach((el) =>
    observadorContadores.observe(el)
  );


  /* ---------- 5. FORMULARIO DE CONTACTO ---------- */
  // Nota: sin backend, el envío se simula y se muestra confirmación.
  // Para envío real, conectar con un servicio como Formspree:
  //   1. Registrar el formulario en formspree.io
  //   2. Cambiar la etiqueta <form> a:
  //      <form action="https://formspree.io/f/TU_ID" method="POST">
  //   3. Eliminar este listener o adaptarlo.
  const formulario = document.getElementById("formContacto");
  const mensajeExito = document.getElementById("formExito");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validación nativa de HTML5 (campos required + type="email")
    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }

    mensajeExito.classList.add("formulario__exito--visible");
    formulario.reset();

    // Oculta la confirmación a los 6 s para no dejarla fija
    setTimeout(() => {
      mensajeExito.classList.remove("formulario__exito--visible");
    }, 6000);
  });

});
