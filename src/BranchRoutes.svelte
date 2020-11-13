<script>
  import {
    Route,
    DetailRoute,
    MasterRoute
  } from "svelte-guard-history-router";
  import { Branch } from "repository-provider";
  import BranchPage from "./pages/Branch.svelte";
  import BranchLink from "./components/BranchLink.svelte";

  export let provider;

  async function* iteratorBranches(transition) {
    const repository = await provider.repository(
      `${transition.params.group}/${transition.params.repository}`
    );

    yield* repository.branches();
  }
</script>

<Route
  path="/branch"
  iteratorFor={iteratorBranches}
  objectInstance={Branch}
  factory={MasterRoute}>
  <Route
    path="/:branch"
    propertyMapping={{ branch: 'name' }}
    factory={DetailRoute}
    linkComponent={BranchLink}
    component={BranchPage}>
    <slot />
  </Route>
</Route>
