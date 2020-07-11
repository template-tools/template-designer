<script>
  import { Route, ChildStoreRoute } from "svelte-guard-history-router";
  import ProviderPage from "./pages/Provider.svelte";
  import ProviderLink from "./components/ProviderLink.svelte";
</script>

<Route
  path="/:provider"
  factory={ChildStoreRoute}
  propertyMapping={{ provider: "name" }}
  linkComponent={ProviderLink}
  component={ProviderPage} />
