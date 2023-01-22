<script>
  import {
    About,
    ApplicationDetails,
    ServiceWorkerDetails,
    ServiceWorkerRegistrationDetails
  } from "svelte-common";
  import { name, version, description } from "../constants.mjs";
  import { serviceWorker, serviceWorkerRegistration } from "../service-worker/registration.mjs";
</script>

<About>
  <ApplicationDetails {name} {version} {description} />
  <ServiceWorkerDetails serviceWorker={$serviceWorker}  />
  <ServiceWorkerRegistrationDetails serviceWorkerRegistration={$serviceWorkerRegistration} />
</About>
