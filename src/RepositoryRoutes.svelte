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

  class RepositoriesRoute extends IteratorStoreRoute {
    iteratorFor() {
      return provider.repositories();
    }

    propertiesFor() {}
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
  objectInstance={Repository}
  factory={RepositoriesRoute}
  {guards}
  component={RepositoriesPage}>
  Repositories
  <Route
    path="/:group/:repository"
    propertyMapping={{ repository: "name" }}
    factory={RepositoryRoute}
    linkComponent={RepositoryLink}
    component={RepositoryPage} />
</Route>
