<script>
  import { iteratorStore } from "../iterator-store.mjs";
  import Attributes from "./Attributes.svelte";
  import RepositoryLink from "./RepositoryLink.svelte";
  import contentEntryRoute from "../routes/content-entry.mjs";

  export let branch;

  let entries = iteratorStore(() => branch.entries());
</script>

<div class="card">
  <div class="card-content">
    <h5 class="card-title">{branch.name}</h5>
    <RepositoryLink repository={branch.repository} />

    <Attributes object={branch} />
  </div>

  <ul>
    {#each $entries as entry (entry.name)}
      <li>
        <a href={contentEntryRoute.pathFor(branch, entry)}>{entry.name}</a>
      </li>
    {/each}
  </ul>
</div>
