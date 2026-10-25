// sw.js limpio para garantizar la instalación
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pasa todas las peticiones directamente a la red sin bloquear la instalación
  event.respondWith(fetch(event.request));
});
