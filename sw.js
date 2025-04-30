const CACHE_NAME = "eggcalc-cache-v1";
const OFFLINE_URLS = [
  "/-/",
  "/-/index.html",
  "/-/manifest.json",
  "/-/icon-192.png",
  "/-/icon-512.png"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(OFFLINE_URLS);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
