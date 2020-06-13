<script>
  export let object;

  const ads = Object.fromEntries(
    Object.entries(object.constructor.attributes).map(([k, v]) => [
      k,
      v === undefined ? {} : typeof v === "object" ? v : { default: v }
    ])
  );

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
