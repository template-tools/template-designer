import IteratorRoute from "../iterator-route.mjs";
import provider from "../provider.mjs";
import ContentEntries from "../pages/ContentEntries.svelte";

export const contentEntriesRoute = new IteratorRoute(
  "/repository/:group/:repository/branch/:branch",
  ContentEntries,
  {
    iteratorForProperties: async properties => {
      const branch = await provider.branch(
        `${properties.group}/${properties.repository}#${properties.branch}`
      );
      return branch.entries();
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

export default contentEntriesRoute;
