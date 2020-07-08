<script>
  import { ObjectLink } from "svelte-guard-history-router";

  export let router;

  const cr = router.route;
</script>

<table class="bordered striped hoverable">
  <thead>
    <tr>
      <th aria-sort="none">Repository</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {#each $cr as repository}
      <tr>
        <td>
          <ObjectLink object={repository} />
        </td>
        <td>
          {#if repository.description}{repository.description}{/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
