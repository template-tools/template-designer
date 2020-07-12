<script>
  import { Repository } from "repository-provider";
  import {
    Route,
    ChildStoreRoute,
    IteratorStoreRoute
  } from "svelte-guard-history-router";
  import RepositoriesPage from "./pages/Repositories.svelte";
  import RepositoryPage from "./pages/Repository.svelte";
  import RepositoryLink from "./components/RepositoryLink.svelte";

  export let provider;
  export let guards;

  function repositoryIterator() {
    return provider.repositories();
  }

  class RepositoryRoute extends ChildStoreRoute {
    objectFor(properties) {
      return provider.repository(
        properties.group + "/" + properties.repository
      );
    }

    propertiesFor(repository) {
      return repository instanceof Repository
        ? { repository: repository.name, group: repository.owner.name }
        : undefined;
    }
  }
</script>

<Route
  path="/repository"
  factory={IteratorStoreRoute}
  iteratorFor={repositoryIterator}
  component={RepositoriesPage}
  {guards}>
  Repositories
  <Route
    path="/:group/:repository"
    propertyMapping={{ repository: 'name' }}
    objectInstance={Repository}
    factory={RepositoryRoute}
    linkComponent={RepositoryLink}
    component={RepositoryPage}>
    <slot />
  </Route>
</Route>
