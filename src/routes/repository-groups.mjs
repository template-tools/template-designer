import ObjectRoute from "../object-route.mjs";
import { provider } from "../provider.mjs";
import RepositoryGroups from "../pages/RepositoryGroups.svelte";

export const repositoryGroupsRoute = new ObjectRoute(
  "/group",
  RepositoryGroups,
  {
    initial: [],
    objectForProperties: async properties => {
      const groups = [];
      for await (const g of provider.repositoryGroups()) {
        groups.push(g);
      }
      return groups; }
  }
);

export default repositoryGroupsRoute;
