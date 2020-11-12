<script>
  import { fade } from "svelte/transition";

  export let router;
</script>

<h1 transition:fade>Waiting for {router.nested.path} to load...</h1>
