import { resolve } from "node:path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";


export default defineConfig({
	base: "./",
	root: "src",
	plugins: [react(), vanillaExtractPlugin()],
	publicDir: resolve(__dirname, "public"),
	build: {
		outDir: resolve(__dirname, "build"),
		emptyOutDir: true,
		copyPublicDir: true,
		rollupOptions: {
			input: {
				"": resolve(__dirname, "src/index.html"),
			},
			output: {
				entryFileNames: "assets/bundle.js",
			},
		},
	},
});