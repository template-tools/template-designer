<script>
  import {
    Route,
    ChildStoreRoute,
    IteratorStoreRoute
  } from "svelte-guard-history-router";
  import { Hook } from "repository-provider";
  import { HookLink } from "svelte-repository-provider";

  import HooksPage from "./pages/Hooks.svelte";
  import HookPage from "./pages/Hook.svelte";

  export let provider;

  async function* iteratorHooks(transition, properties) {
    const repo = await provider.repository(
      properties.group + "/" + properties.repository
    );
    yield* repo.hooks();
  }
</script>

<Route
  path="/hook"
  iteratorFor={iteratorHooks}
  factory={IteratorStoreRoute}
  component={HooksPage}>
  <Route
    path="/:hook"
    factory={ChildStoreRoute}
    objectInstance={Hook}
    propertyMapping={{ hook: 'id' }}
    linkComponent={HookLink}
    component={HookPage} />
</Route>
