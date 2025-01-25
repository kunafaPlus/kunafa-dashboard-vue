import { createI18n } from "vue-i18n";

function loadLocaleMessages() {
  // Using Vite "import.meta.glob" to load all JSON files in the "locales" directory.
  const locales = import.meta.glob("./locales/*.json", { eager: true });
  const messages = {};
  const availableLocales = [];

  // Iterate over the locales object to extract the locale and messages from the JSON files.
  for (const path in locales) {
    // Extract the locale name from the file path (e.g., "en" from "en.json")
    const matched = path.match(/([A-Za-z0-9-_]+)\.json$/i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      // Assign the imported JSON to the messages object
      messages[locale] = locales[path].default;
      // Add the locale to availableLocales
      availableLocales.push(locale);
    }
  }

  return { messages, availableLocales };
}

// Load all locale messages from the "locales" directory.
const { messages, availableLocales } = loadLocaleMessages();

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  availableLocales: availableLocales,
  messages: messages,
});

export default i18n;
