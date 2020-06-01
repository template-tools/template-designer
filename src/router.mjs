import base from "consts:base";
import { Router, route } from "svelte-guard-history-router";
import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";
import Settings from "./pages/Settings.svelte";
import ContentEntry from "./pages/ContentEntry.svelte";

import repositoryGroups from "./routes/repository-groups.mjs";
import repositoryGroup from "./routes/repository-group.mjs";
import repositories from "./routes/repositories.mjs";
import repository from "./routes/repository.mjs";
import branch from "./routes/branch.mjs";

export const router = new Router(
  [
    route("*", Home),
    route("/about", About),
    route("/settings", Settings),
    repositoryGroups,
    repositories,
    repositoryGroup,
    repository,
    branch,
    route("/repository/:group/:repository/branch/:branch/:entry", ContentEntry)
  ],
  base
);
