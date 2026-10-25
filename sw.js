// Service Worker de la PWA — con caché del "app shell"
const VERSION = 'v1';
const CACHE = `jem-portfolio-${VERSION}`;

const PRECACHE = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './site.webmanifest',
  './favicon.ico',
  './img/Jem.svg',
  './img/Jemerling.svg',
  './img/jemerling-portada.jpg',
  './img/jemerling-cabeza.jpg'
];

// Instalación: precargar los recursos esenciales
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

// Activación: limpiar cachés de versiones anteriores
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key.startsWith('jem-portfolio-') && key !== CACHE)
            .map((key) => caches.delete(key))
      )
    ).then(() => clients.claim())
  );
});

// Fetch: red primero, caché como respaldo (network-first para HTML,
// cache-first para el resto de recursos estáticos)
self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        // Guardar en caché las imágenes y fuentes para uso offline
        if (response.ok && /\.(png|jpe?g|svg|webp|woff2?|css|js)$/.test(new URL(request.url).pathname)) {
          const clone = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, clone));
        }
        return response;
      });
    })
  );
});
