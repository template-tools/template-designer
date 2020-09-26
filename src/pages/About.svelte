<script>
  import {
    About,
    ApplicationDetails,
    ServiceWorkerDetails,
    ServiceWorkerRegistrationDetails
  } from "svelte-common";
  import name from "consts:title";
  import version from "consts:version";
  import description from "consts:description";
  import { serviceWorker, serviceWorkerRegistration } from "../main.mjs";
</script>

<About>
  <ApplicationDetails {name} {version} {description} />
  <ServiceWorkerDetails serviceWorker={$serviceWorker}  />
  <ServiceWorkerRegistrationDetails serviceWorkerRegistration={$serviceWorkerRegistration} />
</About>
