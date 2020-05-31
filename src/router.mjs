import base from "consts:base";
import { Router, route } from "svelte-guard-history-router";
import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";
import Settings from "./pages/Settings.svelte";
import Repositories from "./pages/Repositories.svelte";
import RepositoryGroups from "./pages/RepositoryGroups.svelte";
import RepositoryGroup from "./pages/RepositoryGroup.svelte";
import Branch from "./pages/Branch.svelte";
import ContentEntry from "./pages/ContentEntry.svelte";

import { repositoryRoute } from "./repository.mjs";

export const router = new Router(
  [
    route("*", Home),
    route("/about", About),
    route("/settings", Settings),
    route("/group", RepositoryGroups),
    route("/repository", Repositories),
    route("/repository/:group", RepositoryGroup),
    repositoryRoute,
    route("/repository/:group/:repository/branch/:branch", Branch),
    route("/repository/:group/:repository/branch/:branch/:entry", ContentEntry)
  ],
  base
);
