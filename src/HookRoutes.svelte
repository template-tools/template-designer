<script>
  import { Route } from "svelte-guard-history-router";

  import Hooks from "./pages/Hooks.svelte";
  import Hook from "./pages/Hook.svelte";
  import HookLink from "./components/HookLink.svelte";

  import { HooksRoute, HookRoute } from "./routes.mjs";
</script>

<Route path="/hook" factory={HooksRoute} component={Hooks}>
  <Route
    path="/:hook"
    factory={HookRoute}
    linkComponent={HookLink}
    component={Hook}>
    <slot name="link">
    </slot>
    </Route>
</Route>
