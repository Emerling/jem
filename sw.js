// Service Worker básico para habilitar la PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Manejador de peticiones por defecto
  event.respondWith(fetch(event.request));
});
