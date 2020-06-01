import ObjectRoute from "../object-route.mjs";
import { provider } from "../provider.mjs";
import RepositoryGroup from "../pages/RepositoryGroup.svelte";

export const repositoryGroupRoute = new ObjectRoute(
  "/repository/:group",
  RepositoryGroup,
  {
    objectForProperties: async properties => provider.repositoryGroup(properties.group),
    propertiesForObject: group => { return { group: group.name }; }
  }
);

export default repositoryGroupRoute;
