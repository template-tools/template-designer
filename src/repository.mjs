import { readable } from "svelte/store";
import { route } from "svelte-guard-history-router";
import Repository from "./pages/Repository.svelte";
import { provider } from './provider.mjs';
import { router } from './router.mjs';

export const repository = readable(undefined, set => {
    provider
      .repository(
        router.state.params.group + "/" + router.state.params.repository
      )
      .then(r => set(r));
    return () => {};
  });
  

export const repositoryRoute = route(
  "/repository/:group/:repository",
  Repository
);

repositoryRoute.store = repository;