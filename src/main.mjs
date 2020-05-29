import App from "./App.svelte";


export async function initializeServiceWorker() {
    return navigator.serviceWorker.register(
      "service-worker-bundle.mjs"
    );
}

initializeServiceWorker();

export default new App({
  target: document.body
});
