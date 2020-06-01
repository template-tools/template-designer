<script>
  export let object;

  const attributes = Object.keys(object.constructor.defaultOptions)
    .filter(k => object[k] !== undefined)
    .map(key => [key, object[key]]);
</script>

  <table class="striped hoverable">
    <thead>
      <tr>
        <th aria-sort="none">Name</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {#each attributes as attribute (attribute[0])}
        <tr>
          <td>
            {attribute[0]}
          </td>
          <td>
            {attribute[1]}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

