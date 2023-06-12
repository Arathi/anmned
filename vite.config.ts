import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 30612,
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ArcoResolver(),
      ],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
  ],
})
