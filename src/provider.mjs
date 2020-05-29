import { derived, readable } from "svelte/store";
import BitbucketProvider from "bitbucket-repository-provider";
import GiteaProvider from "gitea-repository-provider";
import AggregationProvider from "aggregation-repository-provider";

//import { router } from './router.mjs';

export const provider = AggregationProvider.initialize(
  [BitbucketProvider , GiteaProvider],
  { logLevel: "trace" },
  localStorage
);

export const repositories = readable([], set => {
    async function load() {
      const rs = [];
      for await (const r of provider.repositories()) {
        rs.push(r);
      }
      set(rs);
    }
    load();
    return () => {};
  });
  
export const repository = derived(
  undefined, //router.keys.repository,
  ($repository, set) => {
    provider.repository($repository).then(r => set(r));
    return () => {};
  }
);
