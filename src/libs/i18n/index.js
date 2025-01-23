import { createI18n } from "vue-i18n";

import en from './locales/en.json';
import ar from './locales/ar.json';

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    availableLocales: ['en', 'ar'],
    // messages: loadLocaleMessages, // if dynamically
    messages: {
        en,
        ar
    },
    // messages
});

export default i18n
