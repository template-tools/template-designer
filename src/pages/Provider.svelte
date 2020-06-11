<script>
  import providerRoute from "../routes/provider.mjs";
</script>

{#if $providerRoute}
  <h3>Provider {$providerRoute.name}</h3>
{:else}No such provider{/if}
