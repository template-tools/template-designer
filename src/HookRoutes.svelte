<script>
  import {
    Route,
    ChildStoreRoute,
    IteratorStoreRoute
  } from "svelte-guard-history-router";
  import { Hook } from "repository-provider";

  import HooksPage from "./pages/Hooks.svelte";
  import HookPage from "./pages/Hook.svelte";
  import HookLink from "./components/HookLink.svelte";

  export let provider;

  class HooksRoute extends IteratorStoreRoute {
    async iteratorFor(properties) {
      const repo = await provider.repository(
        properties.group + "/" + properties.repository
      );
      return repo.hooks();
    }

    propertiesFor() {}
  }
</script>

<Route
  path="/hook"
  objectInstance={Hook}
  factory={HooksRoute}
  component={HooksPage}>
  <Route
    path="/:hook"
    factory={ChildStoreRoute}
    propertyMapping={{ hook: 'id' }}
    linkComponent={HookLink}
    component={HookPage} />
</Route>
