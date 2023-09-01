import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   watch: {
  //     usePolling: true,
  //   },
  // },
  resolve: {
    alias: {
      "@/assets": path.resolve(__dirname, "./resources/assets/"),
      "@": path.resolve(__dirname, "./resources/js/"),
    },
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
    preprocessorOptions: {
      less: {
        modifyVars: { "primary-color": "#82ba49" },
        javascriptEnabled: true,
      },
    },
  },
});
