<script>
  import {
    Route,
    DetailRoute,
    MasterRoute
  } from "svelte-guard-history-router";
  import { RepositoryGroup } from "repository-provider";
  import RepositoryGroupsPage from "./pages/RepositoryGroups.svelte";
  import RepositoryGroupPage from "./pages/RepositoryGroup.svelte";
  import RepositoryGroupLink from "./components/RepositoryGroupLink.svelte";

  export let provider;
  export let guard;
</script>

<Route
  path="/group"
  factory={MasterRoute}
  iteratorFor={() => provider.repositoryGroups()}
  objectInstance={RepositoryGroup}
  component={RepositoryGroupsPage}
  {guard}>
  <slot />
  <Route
    path="/:group"
    objectFor={transition => provider.repositoryGroup(transition.params.group)}
    propertyMapping={{ group: 'name' }}
    factory={DetailRoute}
    linkComponent={RepositoryGroupLink}
    component={RepositoryGroupPage} />
</Route>
