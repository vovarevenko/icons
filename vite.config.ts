// import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import { resolve } from 'node:path'
// import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    // legacy({
    //   targets: ['ie >= 11'],
    //   additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    // }),
  ],
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url)),
  //   },
  // },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: 'MyLib',
      fileName: 'my-lib',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
