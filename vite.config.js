import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueform from '@vueform/vueform/vite'
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import path, { resolve, dirname } from 'path'

export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [
    vue(),
    vueform(),
    VueI18nPlugin({
      include: path.resolve(__dirname, './src/libs/i18n/locales'),
      fullInstall: true,
      compositionOnly: false,
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  }
})
