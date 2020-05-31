import App from "./App.svelte";

navigator.serviceWorker
  .register("bundle.service-worker.mjs")
  .then(registration => {
    registration.addEventListener("updatefound", () => {
      const installingWorker = registration.installing;
      console.log("A new service worker is being installed:", installingWorker);

      if(installingWorker) {
        installingWorker.onstatechange = (...args) => console.log(...args);
      }
     // console.log("Waiting:", registration.waiting);
    });
  });

export default new App({
  target: document.body
});
