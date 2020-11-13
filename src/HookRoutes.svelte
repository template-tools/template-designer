<script>
  import {
    Route,
    DetailRoute,
    MasterRoute
  } from "svelte-guard-history-router";
  import { Hook } from "repository-provider";
  import { HookLink } from "svelte-repository-provider";

  import HooksPage from "./pages/Hooks.svelte";
  import HookPage from "./pages/Hook.svelte";

  export let provider;

  async function* iteratorHooks(transition) {
    const repo = await provider.repository(
      transition.params.group + "/" + transition.params.repository
    );
    yield* repo.hooks();
  }
</script>

<Route
  path="/hook"
  iteratorFor={iteratorHooks}
  objectInstance={Hook}
  factory={MasterRoute}
  component={HooksPage}>
  <Route
    path="/:hook"
    factory={DetailRoute}
    propertyMapping={{ hook: 'id' }}
    linkComponent={HookLink}
    component={HookPage} />
</Route>
