<script>
  import HookCard from "../components/HookCard.svelte";
  import { hookRoute } from "../routes/repositories.mjs";
</script>

{#if $hookRoute}
  <HookCard hook={$hookRoute} />
{:else}No such hook{/if}
