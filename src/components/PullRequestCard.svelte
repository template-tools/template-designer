<script>
  import { ObjectLink } from "svelte-guard-history-router";
  import Attributes from "./Attributes.svelte";

  export let pullRequest;
</script>

<div class="card">
  <div class="card-content">
    <h5 class="card-title">{pullRequest.displayName}</h5>
    <ObjectLink object={pullRequest.source} />
    <ObjectLink object={pullRequest.destination} />

    <Attributes object={pullRequest} />
  </div>
</div>
