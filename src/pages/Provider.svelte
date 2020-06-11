<script>
  import providerRoute from "../routes/provider.mjs";
  import Attributes from "../components/Attributes.svelte";
</script>

{#if $providerRoute}
  <h3>Provider {$providerRoute.name}</h3>
  <Attributes object={$providerRoute} />
{:else}No such provider{/if}
