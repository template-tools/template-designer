import { readable } from "svelte/store";
import BitbucketProvider from "bitbucket-repository-provider";
import GiteaProvider from "gitea-repository-provider";
import AggregationProvider from "aggregation-repository-provider";
import { iteratorStore } from "./iterator-store.mjs";

import { router } from './router.mjs';

export const providerFactories = [BitbucketProvider, GiteaProvider];
export const provider = AggregationProvider.initialize(
  providerFactories,
  { logLevel: "trace" },
  localStorage
);

export const repositoryGroups = iteratorStore(() =>
  provider.repositoryGroups()
);

export const repositoryGroup = readable(undefined, set => {
  provider.repositoryGroup(router.state.params.group).then(r => set(r));
  return () => {};
});

export const repositories = iteratorStore(() => provider.repositories());

export const repository = readable(undefined, set => {
  provider.repository(router.state.params.group + '/' + router.state.params.repository ).then(r => set(r));
  return () => {};
});

export const branch = readable(undefined, set => {
  provider.branch(router.state.params.group + '/' + router.state.params.repository + '#' + router.state.params.branch).then(r => set(r));
  return () => {};
});
