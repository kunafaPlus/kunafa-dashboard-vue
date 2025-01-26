import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
// import vueformConfig from './../vueform.config.js'
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'
import i18n from './libs/i18n/index.js'
import iconifyPlugin from './plugins/iconifyPlugin.js'
import '../css/style.scss'

const app = createApp(App)
app.use(Vueform, vueformConfig)
app.use(router)
app.use(i18n)
app.use(iconifyPlugin);
app.use(Vueform);
app.provide('$onLanguageChanged', (lang) => {
    console.log('debug: i18n.global.locale.value  Before in onLanguageChanged in main', i18n.global.locale.value );
    console.log('debug: lang in onLanguageChanged in main file', lang);
    i18n.global.locale.value = lang;
    console.log('debug: i18n.global.locale.value  After in onLanguageChanged in main', i18n.global.locale.value );
});

app.mount('#app')
