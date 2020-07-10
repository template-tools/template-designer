<script>
  import { Route, ChildStoreRoute } from "svelte-guard-history-router";
  import { BaseProvider } from "repository-provider";
  import ProviderPage from "./pages/Provider.svelte";
  import ProviderLink from "./components/ProviderLink.svelte";

  class ProviderRoute extends ChildStoreRoute {
    get propertyMapping() {
      return { provider: "name" };
    }

    get factory() {
      return BaseProvider;
    }
  }
</script>

<Route
  path="/:provider"
  factory={ProviderRoute}
  linkComponent={ProviderLink}
  component={ProviderPage} />
