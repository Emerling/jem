// sw.js temporal de prueba (sin cache.addAll bloqueante)
const VERSION = 'v2-test';
const CACHE = `jem-portfolio-${VERSION}`;

self.addEventListener('install', (event) => {
  // Forzar la activación inmediata sin bloquear por archivos externos
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Dejar pasar las peticiones a la red de forma limpia
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
