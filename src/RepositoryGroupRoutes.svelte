<script>
  import {
    Route,
    ChildStoreRoute,
    IteratorStoreRoute
  } from "svelte-guard-history-router";
  import { RepositoryGroup } from "repository-provider";
  import RepositoryGroupsPage from "./pages/RepositoryGroups.svelte";
  import RepositoryGroupPage from "./pages/RepositoryGroup.svelte";
  import RepositoryGroupLink from "./components/RepositoryGroupLink.svelte";

  export let provider;
  export let guards;
</script>

<Route
  path="/group"
  factory={IteratorStoreRoute}
  iteratorFor={() => provider.repositoryGroups()}
  component={RepositoryGroupsPage}
  {guards}>
  <slot />
  <Route
    path="/:group"
    objectInstance={RepositoryGroup}
    objectFor={(transition, properties) => provider.repositoryGroup(properties.group)}
    propertyMapping={{ group: 'name' }}
    factory={ChildStoreRoute}
    linkComponent={RepositoryGroupLink}
    component={RepositoryGroupPage} />
</Route>
