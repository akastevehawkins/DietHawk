const CACHE_NAME = "diethawk-v3";
const APP_FILES = [
  "./",
  "./index.html",
  "./schedule.html",
  "./meals.html",
  "./restaurant.html",
  "./memory.html",
  "./styles.css",
  "./app.js",
  "./page-loader.js",
  "./manifest.webmanifest",
  "./icon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(event.request).catch(() => caches.match("./index.html"));
    }),
  );
});