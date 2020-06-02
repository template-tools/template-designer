import ObjectRoute from "../object-route.mjs";
import provider from "../provider.mjs";
import PullRequest from "../pages/PullRequest.svelte";

export const pullRequestRoute = new ObjectRoute(
  "/repository/:group/:repository/pr/:pr",
  PullRequest,
  {
    objectForProperties: async properties => {
      const r = await provider.repository(
        `${properties.group}/${properties.repository}`
      );
      return r.pullRequest(properties.pr);
    },
    propertiesForObject: branch => {
      return {
        repository: branch.repository.name,
        group: branch.repository.owner.name,
        pr: pr.name
      };
    }
  }
);

export default pullRequestRoute;
