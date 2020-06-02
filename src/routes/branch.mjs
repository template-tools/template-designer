import ObjectRoute from "../object-route.mjs";
import provider from "../provider.mjs";
import Branch from "../pages/Branch.svelte";

export const branchRoute = new ObjectRoute(
  "/repository/:group/:repository/branch/:branch",
  Branch,
  {
    objectForProperties: async properties =>
      provider.branch(
        `${properties.group}/${properties.repository}#${properties.branch}`
      ),
    propertiesForObject: branch => {
      return {
        repository: branch.repository.name,
        group: branch.repository.owner.name,
        branch: branch.name
      };
    }
  }
);

export default branchRoute;
