<script>
  import {
    About,
    ApplicationDetails,
    ServiceWorkerDetails
  } from "svelte-common";
  import name from "consts:name";
  import version from "consts:version";
  import description from "consts:description";
  import { serviceWorker } from "../main.mjs";
</script>

<About>
  <ApplicationDetails {name} {version} {description} />
  <ServiceWorkerDetails serviceWorker={$serviceWorker} />
</About>
