import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite'
import suidPlugin from "@suid/vite-plugin";

export default defineConfig({
  plugins: [suidPlugin(),tailwindcss(),solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
