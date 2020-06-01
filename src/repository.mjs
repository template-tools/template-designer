import { readable } from "svelte/store";
import { Route } from "svelte-guard-history-router";
import Repository from "./pages/Repository.svelte";
import { provider } from "./provider.mjs";
import { router } from "./router.mjs";

export const repository = readable(undefined, set => {
  provider
    .repository(
      router.state.params.group + "/" + router.state.params.repository
    )
    .then(r => set(r));
  return () => {};
});

export class ObjectRoute extends Route {

  async enter(transition) {
    console.log("enter");
  }

  async leave(transition) {
    console.log("leave");
  }

  propertiesForObject(repository) {
    return { repository: repository.name, group: repository.owner.name };
  }

  pathFor(object) {
    //if(object === undefined) { return '/';}

    const properties = this.propertiesForObject(object);

    let path = this.path;
    
    for(const [k,v] of Object.entries(properties)) {
      path = path.replace(':'+ k, v);
    }

    return path;
  }

  
}

export const repositoryRoute = new ObjectRoute("/repository/:group/:repository", Repository);
