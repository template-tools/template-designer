import App from "./App.svelte";

async function initializeServiceWorker() {
  return navigator.serviceWorker.register("bundle.service-worker.mjs");
}

initializeServiceWorker();

export default new App({
  target: document.body
});
