const CACHE_NAME = "diethawk-v6";
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
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const acceptsHtml = event.request.headers.get("accept")?.includes("text/html");
  const requestUrl = new URL(event.request.url);
  const isHtmlRequest = event.request.mode === "navigate" || acceptsHtml || requestUrl.pathname.endsWith(".html");

  if (isHtmlRequest) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone)),
          );
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(event.request);
          return cached || caches.match("./index.html");
        }),
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone)),
          );
          return response;
        })
        .catch(() => caches.match("./index.html"));
    }),
  );
});