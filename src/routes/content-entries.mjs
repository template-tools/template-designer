import ObjectRoute from "../object-route.mjs";
import { provider } from "../provider.mjs";
import ContentEntries from "../pages/ContentEntries.svelte";

export const contentEntriesRoute = new ObjectRoute(
  "/repository/:group/:repository/branch/:branch/",
  ContentEntries,
  {
    initial: [],
    objectForProperties: async properties => {
      const branch = await provider.branch(
        `${properties.group}/${properties.repository}#${properties.branch}`
      );
      const entries = [];
      for await (const e of branch.entries()) {
        entries.push(e);
      }
      return entries;
    }
  }
);

export default contentEntriesRoute;
