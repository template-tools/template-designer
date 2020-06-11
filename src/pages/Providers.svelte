<script>
  import ProviderLink from "../components/ProviderLink.svelte";
  import providersRoute from "../routes/providers.mjs";
</script>

<div>
  <table class="bordered striped hoverable">
    <thead>
      <tr>
        <th aria-sort="none">Provider</th>
      </tr>
    </thead>
    <tbody>
      {#each $providersRoute as provider (provider.name)}
        <tr>
          <td>
            <ProviderLink {provider} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
