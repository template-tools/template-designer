import { route, WaitingGuard } from "svelte-guard-history-router";
import {
  RepositoryGroupsRoute,
  RepositoryGroupRoute,
  RepositoriesRoute,
  RepositoryRoute,
  BranchRoute,
  ContentEntriesRoute,
  ContentEntryRoute,
  PullRequestRoute,
  HooksRoute,
  HookRoute
} from "./repository-routes.mjs";

import RepositoryGroupLink from "../components/RepositoryGroupLink.svelte";
import RepositoryLink from "../components/RepositoryLink.svelte";
import BranchLink from "../components/BranchLink.svelte";
import HookLink from "../components/HookLink.svelte";
import PullRequestLink from "../components/PullRequestLink.svelte";

import RepositoryGroups from "../pages/RepositoryGroups.svelte";
import RepositoryGroup from "../pages/RepositoryGroup.svelte";
import Repositories from "../pages/Repositories.svelte";
import Repository from "../pages/Repository.svelte";
import Branch from "../pages/Branch.svelte";
import PullRequest from "../pages/PullRequest.svelte";
import Hooks from "../pages/Hooks.svelte";
import Hook from "../pages/Hook.svelte";
import ContentEntries from "../pages/ContentEntries.svelte";
import ContentEntry from "../pages/ContentEntry.svelte";
import Waiting from "../pages/Waiting.svelte";


export const waitingGuard = new WaitingGuard(Waiting);

export const repositoryGroupsRoute = route(
  "/group",
  RepositoryGroupsRoute,
  waitingGuard,
  RepositoryGroups
);

export const repositoryGroupRoute = route(
  repositoryGroupsRoute,
  "/:group",
  RepositoryGroupRoute,
  RepositoryGroup
);
repositoryGroupRoute.linkComponent = RepositoryGroupLink;

export const repositoriesRoute = route(
  "/repository",
  RepositoriesRoute,
  waitingGuard,
  Repositories
);

export const repositoryRoute = route(
  repositoryGroupRoute,
  "/:group/:repository",
  RepositoryRoute,
  Repository
);
repositoryRoute.linkComponent = RepositoryLink;

export const branchRoute = route(
  repositoryRoute,
  "/branch/:branch",
  BranchRoute,
  Branch
);
branchRoute.linkComponent = BranchLink;

export const contentEntriesRoute = route(
  "/entry",
  ContentEntriesRoute,
  ContentEntries
);
contentEntriesRoute.parent = branchRoute;

export const contentEntryRoute = route(
  contentEntriesRoute,
  "/:entry",
  ContentEntryRoute,
  ContentEntry
);

export const pullRequestRoute = route(
  repositoryRoute,
  "/pr/:pr",
  PullRequestRoute,
  PullRequest
);
pullRequestRoute.linkComponent = PullRequestLink;


export const hooksRoute = route(
  repositoryRoute,
  "/hook",
  HooksRoute,
  Hooks
);

export const hookRoute = route(
  hooksRoute,
  "/:hook",
  HookRoute,
  Hook
);
hookRoute.linkComponent = HookLink;
