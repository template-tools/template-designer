<script>
  import { ObjectLink } from "svelte-guard-history-router";
  import { hooksRoute } from "../routes/repositories.mjs";
</script>

<table class="bordered striped hoverable">
  <thead>
    <tr>
      <th aria-sort="none">Hook</th>
    </tr>
  </thead>
  <tbody>
    {#each $hooksRoute as hook}
      <tr>
        <td>
          <ObjectLink object={hook} />
        </td>
      </tr>
    {/each}
  </tbody>
</table>
