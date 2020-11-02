<script>
  import { fade } from "svelte/transition";

  export let router;
</script>

<h1 transition:fade>Waiting for {router.transition.path} to load...</h1>
