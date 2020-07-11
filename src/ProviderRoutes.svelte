<script>
  import { BaseProvider } from "repository-provider";

  import {
    Route,
    ChildStoreRoute,
    IteratorStoreRoute
  } from "svelte-guard-history-router";
  import ProvidersPage from "./pages/Providers.svelte";
  import ProviderPage from "./pages/Provider.svelte";
  import ProviderLink from "./components/ProviderLink.svelte";

  export let provider;

  export class ProvidersRoute extends IteratorStoreRoute {
    iteratorFor() {
      return provider.providers;
    }
  }
</script>

<Route
  path="/provider"
  objectInstance={BaseProvider}
  factory={ProvidersRoute}
  component={ProvidersPage}>
  <slot/>
  <Route
    path="/:provider"
    factory={ChildStoreRoute}
    propertyMapping={{ provider: 'name' }}
    linkComponent={ProviderLink}
    component={ProviderPage} />
</Route>
