import { Route } from "svelte-guard-history-router";

export class ObjectRoute extends Route {
  constructor(path, component, options = {}) {
    super(path, component);

    const properties = {
      subscriptions: { value: new Set() }
    };

    if (options.initial) {
      properties.initial = { value: options.initial };
    }

    if (options.objectForProperties) {
      properties.objectForProperties = { value: options.objectForProperties };
    }
    if (options.propertiesForObject) {
      properties.propertiesForObject = { value: options.propertiesForObject };
    }

    Object.defineProperties(this, properties);
  }

  async enter(transition) {
    if(this.initial) {
      this.subscriptions.forEach(subscription => subscription(this.initial));
    }

    const properties = transition.router.state.params;
    const object = await this.objectForProperties(properties);
    console.log("OBJECT", object, properties);
    this.subscriptions.forEach(subscription => subscription(object));
  }

  async leave(transition) {
    console.log("leave");
  }

  propertiesForObject(object) {
    return Object.fromEntries(this.keys.map(key => [key, object[key]]));
  }

  pathFor(object) {
    const properties = this.propertiesForObject(object);
    return this.path.replace(/:(\w+)/g, (m, name) => properties[name]);
  }

  get initial() {
    return undefined;
  }

  subscribe(subscription) {
    this.subscriptions.add(subscription);
    subscription(this.initial);
    return () => this.subscriptions.delete(subscription);
  }
}

export default ObjectRoute;
