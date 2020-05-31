import App from "./App.svelte";

export let serviceWorkerState = { state: "unknown" };

navigator.serviceWorker
  .register("bundle.service-worker.mjs")
  .then(registration => {
    registration.addEventListener("updatefound", () => {
      const installingWorker = registration.installing;
      //console.log("A new service worker is being installed:", installingWorker);

      if (installingWorker) {
        serviceWorkerState = { state: installingWorker.state };
        installingWorker.onstatechange = event => {
          const sw = event.target;
          serviceWorkerState = { state: sw.state };
        };
      }
    });
  });

export default new App({
  target: document.body
});
