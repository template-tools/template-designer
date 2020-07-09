<script>
  export let router;

  const route = router.route;
</script>

<table class="bordered striped hoverable">
  <thead>
    <tr>
      <th aria-sort="none">Name</th>
    </tr>
  </thead>
  <tbody>
    {#each $route as entry (entry.name)}
      <tr>
        <td>{entry.name}</td>
      </tr>
    {/each}
  </tbody>
</table>
