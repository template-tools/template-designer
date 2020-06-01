import { Route } from "svelte-guard-history-router";

export class IteratorRoute extends Route {
  constructor(path, component, options = {}) {
    super(path, component);

    const properties = {
      subscriptions: { value: new Set() }
    };

    if (options.iteratorForProperties) {
      properties.iteratorForProperties = {
        value: options.iteratorForProperties
      };
    }
    if (options.propertiesForObject) {
      properties.propertiesForObject = { value: options.propertiesForObject };
    }

    Object.defineProperties(this, properties);
  }

  async enter(transition) {
    this.subscriptions.forEach(subscription => subscription([]));

    const properties = transition.router.state.params;

    const entries = [];
    for await (const e of await this.iteratorForProperties(properties)) {
      entries.push(e);
    }

    console.log("ITERATOR", entries, properties);
    this.subscriptions.forEach(subscription => subscription(entries));
  }

  propertiesForObject(object) {
    return Object.fromEntries(this.keys.map(key => [key, object[key]]));
  }

  pathFor(...objects) {
    const properties = this.propertiesForObject(...objects);
    return this.path.replace(/:(\w+)/g, (m, name) => properties[name]);
  }

  subscribe(subscription) {
    this.subscriptions.add(subscription);
    subscription([]);
    return () => this.subscriptions.delete(subscription);
  }
}

export default IteratorRoute;
