const PRECACHE = "precache-v2";
const RUNTIME = "runtime";

const currentCaches = [PRECACHE, RUNTIME];

const PRECACHE_URLS = [
  "images/BitbucketProvider.svg",
  "images/GiteaProvider.svg",
  "images/GithubProvider.svg",
  "images/git.svg",
  "index.html",
  "bundle.mjs",
  "bundle.css",
  "bundle.svelte.css"
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

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
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
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
  }
});
