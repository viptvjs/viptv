import { defineConfig } from "tsup";
export const tsup = defineConfig({
    entry: ["scripts/index.ts"],
    outDir: "lib",
    splitting: false,
    clean: true,
    format: ["esm"],
    minify: process.env.NODE_ENV !== "development",
});
