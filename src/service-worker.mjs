import { PRECACHE_GENERATION, PRECACHE_URLS } from "./service-worker-cache-settings.mjs";

const PRECACHE = `precache-${PRECACHE_GENERATION}`;
const RUNTIME = "runtime";

const currentCaches = [PRECACHE, RUNTIME];

// The install handler takes care of precaching the resources we always need.
self.addEventListener("install", event =>
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  )
);

// The activate handler takes care of cleaning up old caches.
self.addEventListener("activate", event =>
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        cacheNames.filter(cacheName => !currentCaches.includes(cacheName))
      )
      .then(cachesToDelete =>
        Promise.all(
          cachesToDelete.map(cacheToDelete => caches.delete(cacheToDelete))
        )
      )
      .then(() => self.clients.claim())
  )
);

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return caches
        .open(RUNTIME)
        .then(cache =>
          fetch(event.request).then(response =>
            cache.put(event.request, response.clone()).then(() => response)
          )
        );
    })
  );
});
