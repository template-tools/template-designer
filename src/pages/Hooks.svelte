<script>
  import { ObjectLink } from "svelte-guard-history-router";
  export let router;

  const cr = router.route;
</script>

<table class="bordered striped hoverable">
  <thead>
    <tr>
      <th aria-sort="none">Hook</th>
    </tr>
  </thead>
  <tbody>
    {#each $cr as hook}
      <tr>
        <td>
          <ObjectLink object={hook} />
        </td>
      </tr>
    {/each}
  </tbody>
</table>
