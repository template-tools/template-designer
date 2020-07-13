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

  function iteratorGroups(transition, properties) {
    return provider.repositoryGroups();
  }

  function groupObject(transition, properties) {
    return provider.repositoryGroup(properties.group);
  }
</script>

<Route
  path="/group"
  factory={IteratorStoreRoute}
  iteratorFor={iteratorGroups}
  component={RepositoryGroupsPage}
  {guards}>
  <slot />
  <Route
    path="/:group"
    objectInstance={RepositoryGroup}
    objectFor={groupObject}
    propertyMapping={{ group: 'name' }}
    factory={ChildStoreRoute}
    linkComponent={RepositoryGroupLink}
    component={RepositoryGroupPage} />
</Route>
