import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  preview: {
    allowedHosts: ["https://wendolyn-scissile-peculiarly.ngrok-free.dev"],
  },
  server: {
    allowedHosts: true,
  },
  plugins: [react(), tailwindcss()],
});
