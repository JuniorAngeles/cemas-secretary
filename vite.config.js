import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://juniorangeles.github.io/cemas-secretary/",
  plugins: [react()],
});
