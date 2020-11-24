<script>
  import { BaseProvider } from "repository-provider";
  import {
    Route,
    DetailRoute,
    MasterRoute
  } from "svelte-guard-history-router";
  import ProvidersPage from "./pages/Providers.svelte";
  import ProviderPage from "./pages/Provider.svelte";
  import NamedProviderObjectLink from "./components/NamedProviderObjectLink.svelte";

  export let provider;
</script>

<Route
  path="/provider"
  factory={MasterRoute}
  iteratorFor={() => provider.providers}
  objectInstance={BaseProvider}
  component={ProvidersPage}>
  <slot />
  <Route
    path="/:provider"
    factory={DetailRoute}
    propertyMapping={{ provider: 'name' }}
    linkComponent={NamedProviderObjectLink}
    component={ProviderPage} />
</Route>
