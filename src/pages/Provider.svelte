<script>
  import providerRoute from "../routes/provider.mjs";
  import ProviderCard from '../components/ProviderCard.svelte';
</script>

{#if $providerRoute}
  <ProviderCard provider={$providerRoute}/>
{:else}No such provider{/if}
