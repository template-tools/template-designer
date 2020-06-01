<script>
  import contentEntriesRoute from "../routes/content-entries.mjs";
</script>

<div>
  <table class="bordered striped hoverable">
    <thead>
      <tr>
        <th aria-sort="none">Name</th>
      </tr>
    </thead>
    <tbody>
      {#each $contentEntriesRoute as entry (entry.name)}
        <tr>
          <td>{entry.name}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
