<script>
  import {
    Route,
    ChildStoreRoute,
    IteratorStoreRoute
  } from "svelte-guard-history-router";
  import { Branch } from "repository-provider";
  import BranchPage from "./pages/Branch.svelte";
  import BranchLink from "./components/BranchLink.svelte";

  export let provider;

  class BranchesRoute extends IteratorStoreRoute {
    async iteratorFor(properties) {
      const repository = await provider.repository(
        `${properties.group}/${properties.repository}`
      );

      return repository.branches();
    }
    propertiesFor() {}
  }
</script>

<Route path="/branch" factory={BranchesRoute}>
  <Route
    path="/:branch"
    objectInstance={Branch}
    propertyMapping={{ branch: 'name' }}
    factory={ChildStoreRoute}
    linkComponent={BranchLink}
    component={BranchPage}>
    <slot />
  </Route>
</Route>
