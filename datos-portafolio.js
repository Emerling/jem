/* ============================================================
   DATOS DE PROYECTOS Y SERVICIOS — Jemerling Rondón
   ============================================================ */

const PROYECTOS = [
  {
    id: "cafe",
    categoria: "Identidad visual · Packaging",
    titulo: "Café Sierra Alta",
    subtitulo: "Aroma de origen con carácter editorial",
    cliente: "Tostaduría Sierra Alta",
    anio: "2026",
    imagenPrincipal: "img/cafe.jpeg",
    descripcion: "Desarrollo integral de identidad visual y sistema de empaques para una marca de café de especialidad. El concepto combina tipografía de alto contraste con etiquetas táctiles que diferencian cada perfil de tueste.",
    reto: "Destacar en anaqueles saturados manteniendo una estética artesanal, limpia y memorable.",
    solucion: "Se diseñó un sistema modular de etiquetas con códigos cromáticos cálidos, sellos tipográficos personalizados y mockups de presentación.",
    galeria: [
      { src: "img/cafe.jpeg", pie: "Presentación principal de empaque y etiqueta" }
      // Puedes agregar más fotos aquí cuando las tengas:
      // { src: "img/cafe-2.jpg", pie: "Detalle de logotipo y sello" }
    ]
  },
  {
    id: "revista",
    categoria: "Diseño editorial · Dirección de arte",
    titulo: "Revista",
    subtitulo: "Ritmo tipográfico y narrativa visual",
    cliente: "Editorial Independiente",
    anio: "2026",
    imagenPrincipal: "img/revista2.jpg",
    descripcion: "Dirección de arte y maquetación editorial para publicación cultural. Uso de retículas suizas flexibles combinadas con titulares expresivos y fotografía a sangre.",
    reto: "Equilibrar bloques densos de lectura con pausas visuales atractivas.",
    solucion: "Jerarquía tipográfica clara, folios estilizados y composición dinámica en dobles páginas.",
    galeria: [
      { src: "img/revista2.jpg", pie: "Pliego interior y composición tipográfica" }
    ]
  },
  {
    id: "lettering",
    categoria: "Cartelería · Lettering",
    titulo: "Lettering digitalizado",
    subtitulo: "Del trazo manual al vector de precisión",
    cliente: "Proyecto Cultural / Exhibición",
    anio: "2025",
    imagenPrincipal: "img/cartelera.jpg",
    descripcion: "Serie de carteles tipográficos creados a partir de bocetos caligráficos digitalizados y vectorizados con curvas limpias para impresión en gran formato.",
    reto: "Conservar la expresividad orgánica del trazo hecho a mano al llevarlo a formato digital.",
    solucion: "Vectorización artesanal nodo por nodo en Illustrator y aplicación sobre soportes gráficos de alto impacto.",
    galeria: [
      { src: "img/cartelera.jpg", pie: "Cartel tipográfico finalizado" }
    ]
  },
  {
    id: "web",
    categoria: "Diseño web · UI",
    titulo: "Estudio Aura",
    subtitulo: "Sensibilidad editorial llevada a la interfaz",
    cliente: "Estudio Aura",
    anio: "2026",
    imagenPrincipal: "img/web.jpg",
    descripcion: "Diseño de interfaz (UI) y experiencia de usuario para estudio creativo. Navegación minimalista con protagonismo tipográfico y microinteracciones fluidas.",
    reto: "Trasladar la elegancia de una revista impresa a una pantalla adaptable.",
    solucion: "Sistema de diseño en Figma con grillas responsivas, contraste alto y espacios negativos generosos.",
    galeria: [
      { src: "img/web.jpg", pie: "Vista principal de interfaz web" }
    ]
  },
  {
    id: "social",
    categoria: "Perfil · Red",
    titulo: "Redes Sociales",
    subtitulo: "Coherencia visual en movimiento",
    cliente: "Marcas Creativas",
    anio: "2026",
    imagenPrincipal: "img/social.jpg",
    descripcion: "Sistema de plantillas y dirección visual para ecosistemas digitales. Carruseles narrativos, portadas y piezas gráficas alineadas al manual de marca.",
    reto: "Mantener identidad reconocible sin caer en diseños repetitivos.",
    solucion: "Kit de componentes gráficos versátiles en Photoshop e Illustrator listos para publicar.",
    galeria: [
      { src: "img/social.jpg", pie: "Sistema de grillas y piezas para redes" }
    ]
  },
  {
    id: "motion",
    categoria: "Motion · Animación",
    titulo: "Loop Creativo",
    subtitulo: "Tipografía y formas en ritmo continuo",
    cliente: "Identidad Digital",
    anio: "2026",
    imagenPrincipal: "img/motion.jpg",
    descripcion: "Exploración de motion graphics y animación tipográfica en After Effects para intros de marca, reels y pantallas digitales.",
    reto: "Dar vida a elementos gráficos estáticos respetando los tiempos de lectura.",
    solucion: "Curvas de aceleración suaves y transiciones sincronizadas con la identidad visual.",
    galeria: [
      { src: "img/motion.jpg", pie: "Fotograma clave de animación" }
    ]
  }
];

const SERVICIOS = [
  {
    id: "identidad",
    numero: "(01)",
    titulo: "Identidad de marca",
    subtitulo: "Marcas con voz propia y presencia inolvidable",
    imagenPortada: "img/cafe.jpeg",
    descripcion: "Construyo sistemas visuales sólidos desde la estrategia hasta la aplicación final. No se trata solo de un logotipo bonito, sino de un lenguaje visual coherente que funcione en cualquier soporte físico o digital.",
    entregables: [
      "Investigación y concepto creativo",
      "Logotipo principal, variantes y isotipo",
      "Paleta cromática y sistema tipográfico",
      "Manual de identidad visual (Brandbook)",
      "Aplicaciones en papelería y redes"
    ],
    galeria: [
      { src: "img/cafe.jpeg", titulo: "Sistema de marca Café Sierra Alta" },
      { src: "img/social.jpg", titulo: "Aplicación de identidad en medios digitales" }
    ]
  },
  {
    id: "editorial",
    numero: "(02)",
    titulo: "Diseño editorial",
    subtitulo: "Papel, tinta, retícula y ritmo de lectura",
    imagenPortada: "img/revista2.jpg",
    descripcion: "Diseño publicaciones impresas y digitales cuidando cada detalle tipográfico: márgenes, interlineado, jerarquías y flujo visual para que leer sea una experiencia estética.",
    entregables: [
      "Diseño de revistas y suplementos culturales",
      "Maquetación de libros y catálogos",
      "Informes anuales y dossiers corporativos",
      "Publicaciones digitales y E-books interactivos",
      "Preparación de artes finales para imprenta"
    ],
    galeria: [
      { src: "img/revista2.jpg", titulo: "Diseño editorial de revista" }
    ]
  },
  {
    id: "packaging",
    numero: "(03)",
    titulo: "Packaging",
    subtitulo: "Envases que conectan desde el primer vistazo",
    imagenPortada: "img/cafe.jpeg",
    descripcion: "Diseño de empaques y etiquetas con enfoque estratégico y sensorial. Selección de acabados, troqueles y presentación visual para destacar en el punto de venta.",
    entregables: [
      "Diseño de etiquetas y envoltorios",
      "Desarrollo de troqueles y cajas",
      "Ediciones especiales y merchandising",
      "Mockups fotorrealistas de presentación",
      "Archivos listos para producción industrial"
    ],
    galeria: [
      { src: "img/cafe.jpeg", titulo: "Packaging Café Sierra Alta" }
    ]
  },
  {
    id: "digital",
    numero: "(04)",
    titulo: "Diseño digital",
    subtitulo: "Interfaces limpias con sensibilidad editorial",
    imagenPortada: "img/web.jpg",
    descripcion: "Traslado los principios del buen diseño gráfico al entorno web y móvil. Interfaces intuitivas, tipografía protagonista y sistemas visuales ordenados para productos digitales.",
    entregables: [
      "Diseño de sitios web y Landing Pages (UI)",
      "Prototipado interactivo en Figma",
      "Kits gráficos y plantillas para redes sociales",
      "Diseño de newsletters y presentaciones",
      "Dirección de arte digital"
    ],
    galeria: [
      { src: "img/web.jpg", titulo: "Interfaz Web Estudio Aura" },
      { src: "img/social.jpg", titulo: "Diseño de contenido digital" },
      { src: "img/motion.jpg", titulo: "Piezas digitales animadas" }
    ]
  },
  {
    id: "carteleria",
    numero: "(05)",
    titulo: "Cartelería & lettering",
    subtitulo: "Letras dibujadas con carácter y expresión",
    imagenPortada: "img/cartelera.jpg",
    descripcion: "Piezas únicas para eventos, cultura, música y marcas que buscan diferenciarse mediante letras personalizadas, ilustración tipográfica y carteles de colección.",
    entregables: [
      "Carteles promocionales y culturales",
      "Lettering personalizado y logotipos caligráficos",
      "Gráfica para murales y espacios",
      "Diseño para merchandising y textiles",
      "Ilustración vectorial aplicada"
    ],
    galeria: [
      { src: "img/cartelera.jpg", titulo: "Cartelería y lettering digitalizado" }
    ]
  }
];
