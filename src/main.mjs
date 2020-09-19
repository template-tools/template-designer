import { initializeServiceWorker } from "svelte-common";
import App from "./App.svelte";

const { serviceWorker } = initializeServiceWorker("bundle.service-worker.mjs");
export { serviceWorker };

export default new App({
  target: document.body
});
