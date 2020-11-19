<script>
  export let router;

  const route = router.route;
  const entries = $route.value;
</script>

<table class="bordered striped hoverable">
  <thead>
    <tr>
      <th aria-sort="none">Name</th>
    </tr>
  </thead>
  <tbody>
    {#each entries as entry (entry.name)}
      <tr>
        <td>{entry.name}</td>
      </tr>
    {/each}
  </tbody>
</table>
