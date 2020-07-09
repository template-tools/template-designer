<script>
  import { Route } from "svelte-guard-history-router";

  import {
    BranchRoute,
    ContentEntriesRoute,
    ContentEntryRoute
  } from "./routes.mjs";

  import Branch from "./pages/Branch.svelte";
  import BranchLink from "./components/BranchLink.svelte";
  import ContentEntries from "./pages/ContentEntries.svelte";
  import ContentEntry from "./pages/ContentEntry.svelte";
</script>

<Route
  path="/branch/:branch"
  factory={BranchRoute}
  linkComponent={BranchLink}
  component={Branch}>
  <Route path="/entry" factory={ContentEntriesRoute} component={ContentEntries}>
    <Route
      path="/:entry"
      factory={ContentEntryRoute}
      component={ContentEntry} />
  </Route>
</Route>
