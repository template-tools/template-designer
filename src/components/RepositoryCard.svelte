<script>
  import iteratorStore from "../iterator-store.mjs";
  import HookCard from "./HookCard.svelte";
  import BranchLink from "./BranchLink.svelte";
  import RepositoryGroupLink from "./RepositoryGroupLink.svelte";
  import Attributes from "./Attributes.svelte";

  export let repository;

  let branches = iteratorStore(() => repository.branches());
  let hooks = iteratorStore(() => repository.hooks());
</script>

<div class="card">
  <div class="card-content">
    <h5 class="card-title">{repository.name}</h5>
    <RepositoryGroupLink repositoryGroup={repository.owner} />

    <Attributes object={repository} />
  </div>

  <ul>
    {#each $branches as branch (branch.name)}
      <li>
        <BranchLink {branch} />
      </li>
    {/each}
  </ul>

  {#each $hooks as hook}
    <HookCard {hook} />
  {/each}
</div>
