<script>
  import { ObjectLink } from "svelte-guard-history-router";
  import iteratorStore from "../iterator-store.mjs";
  import Attributes from "./Attributes.svelte";
  import { contentEntryRoute } from "../routes/repositories.mjs";

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
