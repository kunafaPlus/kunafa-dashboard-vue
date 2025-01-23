import en from '@vueform/vueform/locales/en'
import zh from '@vueform/vueform/locales/zh_CN'
import tailwind from '@vueform/vueform/themes/tailwind'
import { defineConfig } from '@vueform/vueform'

export default defineConfig({
    theme: tailwind,
    locales: { en, zh },
    locale: 'en',
})
