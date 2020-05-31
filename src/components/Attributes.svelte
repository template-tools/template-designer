<script>
  export let object;

  const attributes = Object.keys(object.constructor.defaultOptions).map(key => [
    key,
    object[key]
  ]);
</script>

<ul>
  {#each attributes as attribute}
    <li>{attribute[0]} {attribute[1]}</li>
  {/each}
</ul>
