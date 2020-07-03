import { route } from "svelte-guard-history-router";
import {
  ProvidersRoute,
  ProviderRoute,
  RepositoryGroupsRoute,
  RepositoryGroupRoute,
  RepositoriesRoute,
  RepositoryRoute,
  BranchRoute,
  ContentEntriesRoute,
  ContentEntryRoute,
  PullRequestRoute
} from "./repository-routes.mjs";

import ProviderLink from "../components/ProviderLink.svelte";
import RepositoryGroupLink from "../components/RepositoryGroupLink.svelte";
import RepositoryLink from "../components/RepositoryLink.svelte";
import BranchLink from "../components/BranchLink.svelte";
import HookLink from "../components/HookLink.svelte";
import PullRequestLink from "../components/PullRequestLink.svelte";

export { ProvidersRoute, RepositoriesRoute };

//import Providers from "../pages/Providers.svelte";
import Provider from "../pages/Provider.svelte";
import RepositoryGroups from "../pages/RepositoryGroups.svelte";
import RepositoryGroup from "../pages/RepositoryGroup.svelte";
import Repositories from "../pages/Repositories.svelte";
import Repository from "../pages/Repository.svelte";
import Branch from "../pages/Branch.svelte";
import PullRequest from "../pages/PullRequest.svelte";
import ContentEntry from "../pages/ContentEntry.svelte";
import ContentEntries from "../pages/ContentEntries.svelte";

//export const providersRoute = route("/provider", ProvidersRoute, Providers);

export const providerRoute = route(
  "/provider/:provider",
  ProviderRoute,
  Provider
);
providerRoute.linkComponent = ProviderLink;


export const repositoryGroupsRoute = route(
  "/group",
  RepositoryGroupsRoute,
  RepositoryGroups
);

export const repositoryGroupRoute = route(
  "/:group",
  RepositoryGroupRoute,
  RepositoryGroup
);
repositoryGroupRoute.parent = repositoryGroupsRoute;
repositoryGroupRoute.linkComponent = RepositoryGroupLink;

export const repositoriesRoute = route(
  "/repository",
  RepositoriesRoute,
  Repositories
);

export const repositoryRoute = route(
  "/:group/:repository",
  RepositoryRoute,
  Repository
);
repositoryRoute.parent = repositoryGroupRoute;
repositoryRoute.linkComponent = RepositoryLink;

export const branchRoute = route(
  "/branch/:branch",
  BranchRoute,
  Branch
);
branchRoute.parent = repositoryRoute;
branchRoute.linkComponent = BranchLink;

export const contentEntriesRoute = route(
  "/entry",
  ContentEntriesRoute,
  ContentEntries
);
contentEntriesRoute.parent = branchRoute;

export const contentEntryRoute = route(
  "/:entry",
  ContentEntryRoute,
  ContentEntry
);
contentEntryRoute.parent = contentEntriesRoute;

export const pullRequestRoute = route(
  "/pr/:pr",
  PullRequestRoute,
  PullRequest
);
pullRequestRoute.parent = repositoryRoute;
pullRequestRoute.linkComponent = PullRequestLink;
