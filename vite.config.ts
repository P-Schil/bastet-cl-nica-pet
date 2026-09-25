import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import { lovable } from "@lovable.dev/vite-tanstack-config";
export default defineConfig({
  base:"./",
  plugins:[viteTsConfigPaths(),viteReact(),tanstackStart(),nitro(),lovable()],
});