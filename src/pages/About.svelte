<script>
  import { About } from "svelte-common";

  import name from "consts:name";
  import version from "consts:version";
  import description from "consts:description";

  import { serviceWorker } from "../main.mjs";
</script>

<About {name} {version} {description}>
  <tr>
    <td>Service Worker</td>
    <td colspan="2">{$serviceWorker.state}</td>
  </tr>
</About>
