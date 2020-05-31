import { readable } from "svelte/store";
import BitbucketProvider from "bitbucket-repository-provider";
import GiteaProvider from "gitea-repository-provider";
import AggregationProvider from "aggregation-repository-provider";
import { iteratorStore } from "./iterator-store.mjs";

//import { router } from './router.mjs';

export const provider = AggregationProvider.initialize(
  [BitbucketProvider, GiteaProvider],
  { logLevel: "trace" },
  localStorage
);

export const repositoryGroups = iteratorStore(() =>
  provider.repositoryGroups()
);

export const repositoryGroup = readable(undefined, set => {
  provider.repositoryGroup("arlac77").then(r => set(r));
  return () => {};
});

export const repositories = iteratorStore(() => provider.repositories());

export const repository = readable(undefined, set => {
  provider.repository("arlac77/template-rollup").then(r => set(r));
  return () => {};
});
