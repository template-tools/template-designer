import App from "./App.svelte";

navigator.serviceWorker.register("bundle.service-worker.mjs");

export default new App({
  target: document.body
});
