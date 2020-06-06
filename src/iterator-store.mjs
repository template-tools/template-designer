import { readable } from "svelte/store";

export function iteratorStore(iterator, initial = []) {
  return readable(initial, set => {
    async function load() {
      const rs = [];
      for await (const r of iterator()) {
        rs.push(r);
      }
      set(rs);
    }
    load();
    return () => {};
  });
}

export default iteratorStore;
