<script>
  import { iteratorStore } from "../iterator-store.mjs";
  import HookCard from "./HookCard.svelte";
  import Attributes from "./Attributes.svelte";

  export let repository;

  let branches = iteratorStore(() => repository.branches());
  let hooks = iteratorStore(() => repository.hooks());
</script>

<div class="card">
  <div class="card-content">
    <h5 class="card-title">{repository.name}</h5>
    <h6 class="card-subtitle">{repository.description}</h6>
    <p class="card-text">Id {repository.id}</p>

    <label>
      <input type="checkbox" bind:checked={repository.isArchived} />
      Archived
    </label>
    <label>
      <input type="checkbox" bind:checked={repository.isLocked} />
      Locked
    </label>
    <label>
      <input type="checkbox" bind:checked={repository.isDisabled} />
      Disabled
    </label>
    <label>
      <input type="checkbox" bind:checked={repository.isTemplate} />
      Template
    </label>
  </div>

  <Attributes object={repository}/>

  <ul>
    {#each $branches as branch}
      <li>{branch.name}</li>
    {/each}
  </ul>

  {#each $hooks as hook}
    <HookCard hook={hook} />
  {/each}
</div>
