<script>
  import { ObjectLink } from "svelte-guard-history-router";
  import { repositoryGroupsRoute } from "../routes/repositories.mjs";
</script>

<table class="bordered striped hoverable">
  <thead>
    <tr>
      <th aria-sort="none">Group</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {#each $repositoryGroupsRoute as repositoryGroup}
      <tr>
        <td>
          <ObjectLink object={repositoryGroup} />
        </td>
        <td>
          {#if repositoryGroup.description}{repositoryGroup.description}{/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
