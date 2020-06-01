import IteratorRoute from "../iterator-route.mjs";
import provider from "../provider.mjs";
import RepositoryGroups from "../pages/RepositoryGroups.svelte";

export const repositoryGroupsRoute = new IteratorRoute(
  "/group",
  RepositoryGroups,
  {
    iteratorForProperties: async properties => provider.repositoryGroups()
  }
);

export default repositoryGroupsRoute;
