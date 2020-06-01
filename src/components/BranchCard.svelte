<script>
  import { iteratorStore } from "../iterator-store.mjs";
  import Attributes from "./Attributes.svelte";
  import RepositoryLink from "./RepositoryLink.svelte";

  export let branch;
</script>

<div class="card">
  <div class="card-content">
    <h5 class="card-title">{branch.name}</h5>
    <RepositoryLink repository={branch.repository} />

    <Attributes object={branch} />
  </div>
</div>
