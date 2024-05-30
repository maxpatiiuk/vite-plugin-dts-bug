import { defineConfig } from "vite";
import vitePluginDts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vitePluginDts({
      tsconfigPath: "tsconfig.broken.json",
      // tsconfigPath: "tsconfig.works.json",
    }),
  ],
});
