import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "https://rastaar-center.dastar.dev/api-json",
    output: {
      target: "./src/api/generated.ts",
      client: "fetch",
      httpClient: "fetch",
      override: {
        mutator: { path: "src/mutators/fetch.ts", name: "fetchMutator" },
      },
    },
  },
});
