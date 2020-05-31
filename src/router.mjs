import { Router, route } from "svelte-guard-history-router";
import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";
import Settings from "./pages/Settings.svelte";
import Repositories from "./pages/Repositories.svelte";
import Repository from "./pages/Repository.svelte";
import RepositoryGroups from "./pages/RepositoryGroups.svelte";
import RepositoryGroup from "./pages/RepositoryGroup.svelte";
import Branch from "./pages/Branch.svelte";
import ContentEntry from "./pages/ContentEntry.svelte";

import base from "consts:base";

export const router = new Router(
  [
    route("*", Home),
    route("/about", About),
    route("/settings", Settings),
    route("/group", RepositoryGroups),
    route("/repository", Repositories),
    route("/repository/:group", RepositoryGroup),
    route("/repository/:group/:repository", Repository),
    route("/repository/:group/:repository/branch/:branch", Branch),
    route("/repository/:group/:repository/branch/:branch/:entry", ContentEntry)
  ],
  base
);
