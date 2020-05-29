const PRECACHE = "precache-v1";
const RUNTIME = "runtime";

const PRECACHE_URLS = [
  "images/BitbucketProvider.svg",
  "images/GiteaProvider.svg",
  "images/GithubProvider.svg",
  "index.html",
  "bundle.mjs",
  "bundle.css",
  "bundle.svelte.css"
].map(u => "/" + u);

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
self.addEventListener("activate", event => {
  const currentCaches = [PRECACHE, RUNTIME];
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
  );
});

let count = 0;

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener("fetch", event => {
  if (event.request.url.endsWith("hello")) {
    count++;

    event.respondWith(
      new Response(
        `Hello from your friendly neighbourhood service worker! #${count}`,
        {
          headers: { "Content-Type": "text/html" }
        }
      )
    );

    return;
  }

  if (event.request.url.endsWith("cache")) {
    caches.open(PRECACHE).then(cache => {
      cache.keys().then(keys => {
        event.respondWith(
          new Response(JSON.stringify([...keys]), {
            headers: { "Content-Type": "application/json" }
          })
        );
      });
    });

    return;
  }

  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache =>
          fetch(event.request).then(response =>
            // Put a copy of the response in the runtime cache.
            cache.put(event.request, response.clone()).then(() => response)
          )
        );
      })
    );
  }
});
