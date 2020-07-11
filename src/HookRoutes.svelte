<script>
  import {
    Route,
    ChildStoreRoute
  } from "svelte-guard-history-router";
  import { Hook } from "repository-provider";
  import { HooksRoute } from "./routes.mjs";

  import HooksPage from "./pages/Hooks.svelte";
  import HookPage from "./pages/Hook.svelte";
  import HookLink from "./components/HookLink.svelte";
</script>

<Route path="/hook" factory={HooksRoute} component={HooksPage}>
  <Route
    path="/:hook"
    factory={ChildStoreRoute}
    propertyMapping={{ hook: "id" }}
    linkComponent={HookLink}
    component={HookPage} />
</Route>
