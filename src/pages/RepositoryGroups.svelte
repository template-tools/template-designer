<script>
  import RepositoryGroupLink from "../components/RepositoryGroupLink.svelte";
  import { repositoryGroups } from "../provider.mjs";
</script>

<div>
  <table class="bordered striped hoverable">
    <thead>
      <tr>
        <th aria-sort="none">Group</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {#each $repositoryGroups as repositoryGroup (repositoryGroup.name)}
        <tr>
          <td>
            <RepositoryGroupLink {repositoryGroup} />
          </td>
          <td>
            {#if repositoryGroup.description}{repositoryGroup.description}{/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
