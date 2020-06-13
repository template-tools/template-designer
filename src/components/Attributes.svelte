<script>
  export let object;

  const ads = object.constructor.attributes;

  const attributes = Object.keys(ads)
    .filter(k => object[k] !== undefined)
    .map(key => [key, object[key]]);
</script>

<table class="striped hoverable">
  <tbody>
    {#each attributes as attribute (attribute[0])}
      <tr>
        <td>{attribute[0]}</td>
        <td>{ads[attribute[0]].private ? '***' : attribute[1]}</td>
      </tr>
    {/each}
  </tbody>
</table>
