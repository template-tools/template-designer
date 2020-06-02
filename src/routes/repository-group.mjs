import ObjectStoreRoute from "../object-store-route.mjs";
import provider from "../provider.mjs";
import RepositoryGroup from "../pages/RepositoryGroup.svelte";

export const repositoryGroupRoute = new ObjectStoreRoute(
  "/repository/:group",
  RepositoryGroup,
  {
    objectForProperties: async properties => provider.repositoryGroup(properties.group),
    propertiesForObject: group => { return { group: group.name }; }
  }
);

export default repositoryGroupRoute;
