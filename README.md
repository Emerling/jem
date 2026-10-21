# jem
web de portafolio de Jemerling
PORTAFOLIO — DISEÑADORA GRÁFICA FREELANCE
===========================================

Cómo usar el sitio
------------------
1. Descomprime la carpeta y abre `index.html` en el navegador.
   No requiere servidor ni dependencias: solo necesita conexión a
   internet para cargar las tipografías (Google Fonts) y las
   imágenes provisionales (placehold.co).

Estructura de archivos
----------------------
  index.html   → Estructura y contenido del sitio (comentado en español)
  styles.css   → Todo el diseño visual: colores, tipografía, móvil
  script.js    → Interactividad: menú móvil, animaciones, contadores, formulario

Personalización rápida
----------------------
* Nombre / textos: edítalos directamente en `index.html`.
* Colores: cambia las variables `--rojo`, `--fondo`, etc. al inicio de
  `styles.css` (líneas ":root { ... }").
* Tipografías: sustituye los enlaces de Google Fonts en el <head> y las
  variables `--fuente-*` en `styles.css`.
* Imágenes provisionales: busca `placehold.co` en `index.html` y cambia
  cada `src` por la ruta de tu imagen real (carpeta /img, por ejemplo).
* Email: actualiza el enlace `mailto:hola@valeriarios.design`.
* Redes sociales: actualiza las URLs del `<footer>`.
* Formulario: sin backend envía simulado; para envío real conecta
  Formspree siguiendo las instrucciones comentadas en `script.js`.

Secciones incluidas
-------------------
Presentación (hero), métricas animadas, proyectos seleccionados,
servicios, sobre mí, contacto con formulario y footer con redes.
Diseño adaptable a móvil (menú hamburguesa a pantalla completa).