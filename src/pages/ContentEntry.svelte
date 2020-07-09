<script>
  export let router;

  const route = router.route;
</script>

{#if $route}
  <h1>{$route.name}</h1>

  {#await $route.getString()}
    <p>...waiting</p>
  {:then string}
    {string}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
{:else}No such entry{/if}
