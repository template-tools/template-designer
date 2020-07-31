<script>
  import { ObjectLink } from "svelte-guard-history-router";
  import { Attributes } from "svelte-repository-provider";

  import iteratorStore from "../iterator-store.mjs";
  import PullRequestCard from "./PullRequestCard.svelte";

  export let repository;

  let branches = iteratorStore(() => repository.branches());
  let hooks = iteratorStore(() => repository.hooks());
  let pullRequests = iteratorStore(() => repository.pullRequests());
</script>

<div class="card">
  <div class="card-content">
    <h5 class="card-title">{repository.name}</h5>
    <ObjectLink object={repository.owner} />
    <Attributes object={repository} />
  </div>

  <ul>
    {#each $branches as branch (branch.name)}
      <li>
        <ObjectLink object={branch} />
      </li>
    {/each}
  </ul>

  <h5>Hooks</h5>
  <ul>
    {#each $hooks as hook}
      <li>
        <ObjectLink object={hook} />
      </li>
    {/each}
  </ul>

  {#each $pullRequests as pullRequest}
    <PullRequestCard {pullRequest} />
  {/each}
</div>
