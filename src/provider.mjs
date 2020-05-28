import { derived, readable } from "svelte/store";
import BitbucketProvider from "bitbucket-repository-provider";
import GiteaProvider from "gitea-repository-provider";
import AggregationProvider from "aggregation-repository-provider";

//import { router } from './router.mjs';

export const provider = AggregationProvider.initialize(
  [BitbucketProvider /*, GiteaProvider*/],
  { logLevel: "trace" },
  localStorage
);

export const repositories = readable([], async set => {
    const rs = [];
    for await (const r of provider.repositories()) {
      rs.push(r);
    }
    set(rs);
    return () => {};
  });
  
export const repository = derived(
  undefined, //router.keys.repository,
  ($repository, set) => {
    provider.repository($repository).then(r => set(r));
    return () => {};
  }
);

export const repositoryGroups = readable([], async set => {
    set([...provider.repositoryGroups()]);
    return () => {};
  });

export const repositoryGroup = derived(
  undefined, //router.keys.repositoryGroup,
  ($repositoryGroup, set) => {
    provider.repositoryGroup($repositoryGroup).then(g => set(g));
    return () => {};
  }
);
