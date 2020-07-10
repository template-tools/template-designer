<script>
  import {
    Route,
    IteratorStoreRoute,
    ChildStoreRoute
  } from "svelte-guard-history-router";
  import { Hook } from "repository-provider";
  import { HooksRoute } from "./routes.mjs";

  import HooksPage from "./pages/Hooks.svelte";
  import HookPage from "./pages/Hook.svelte";
  import HookLink from "./components/HookLink.svelte";

  class HookRoute extends ChildStoreRoute {
    get propertyMapping() {
      return { hook: "id" };
    }

    get factory() {
      return Hook;
    }
  }
</script>

<Route path="/hook" factory={HooksRoute} component={HooksPage}>
  <Route
    path="/:hook"
    factory={HookRoute}
    linkComponent={HookLink}
    component={HookPage} />
</Route>
