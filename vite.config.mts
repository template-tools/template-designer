import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { extractFromPackage } from "npm-pkgbuild";

export default defineConfig(async ({ command, mode }) => {
  const res = extractFromPackage({
    dir: new URL("./", import.meta.url).pathname,
    mode
  }, process.env);
  const first = await res.next();
  const pkg = first.value;
  const properties = pkg.properties;
  const base = properties["http.path"];
  const production = mode === "production";

  process.env["VITE_NAME"] = properties.name;
  process.env["VITE_DESCRIPTION"] = properties.description;
  process.env["VITE_VERSION"] = properties.version;
  process.env["VITE_API"] = properties["http.api.path"];
  process.env["VITE_API_WS"] = properties["wss.api"];

  const open = process.env.CI ? {} : { open: base };

  return {
    base,
    root: "src",
    worker: { format: "es" },
    plugins: [
      svelte({
        compilerOptions: {
          dev: !production
        }
      })
    ],
    server: { host: true, ...open },
    build: {
      outDir: "../build",
      target: "safari16",
      emptyOutDir: true,
      minify: production,
      sourcemap: true
    }
  };
});
