<script>
  import { BaseProvider } from "repository-provider";
  export let provider;
</script>

<img
  src="images/{provider instanceof BaseProvider ? provider.constructor.name : provider.name}.svg"
  width="16"
  height="16"
  alt={provider.name} />
