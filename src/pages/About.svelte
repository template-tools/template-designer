<script>
  import { About, ServiceWorkerDetails } from "svelte-common";
  import name from "consts:name";
  import version from "consts:version";
  import description from "consts:description";
  import { serviceWorker } from "../main.mjs";
</script>

<About {name} {version} {description}>
  <ServiceWorkerDetails serviceWorker={$serviceWorker} />
</About>
