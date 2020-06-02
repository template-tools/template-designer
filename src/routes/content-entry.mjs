import ObjectRoute from "../object-route.mjs";
import { provider } from "../provider.mjs";
import ContentEntry from "../pages/ContentEntry.svelte";

export const contentEntryRoute = new ObjectRoute(
  "/repository/:group/:repository/branch/:branch/:entry",
  ContentEntry,
  {
    objectForProperties: async properties => {
      const branch = await provider.branch(
        `${properties.group}/${properties.repository}#${properties.branch}`
      );

      return branch.entry(properties.entry);
    },
    propertiesForObject: (branch, entry) => {
      return {
        repository: branch.repository.name,
        group: branch.repository.owner.name,
        branch: branch.name,
        name: entry.name
      };
    }
  }
);

export default contentEntryRoute;
