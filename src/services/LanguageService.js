import { useI18n } from "vue-i18n";
import { computed } from "vue";

const rtlLanguages = new Set(["ar", "he", "fa", "ur", "dv", "ku", "mng"]);

// export the function to detect the language direction in any case needed while retaining the original function
export function detectRTL(language) {
  return rtlLanguages.has(language);
}

export default function useLangDirection() {
  const { locale } = useI18n();
  const currentLanguage = computed(() => locale.value);

  const isRTL = computed(() => detectRTL(currentLanguage.value));
  const langDirection = computed(() => (isRTL.value ? "rtl" : "ltr"));

  return {
    currentLanguage,
    langDirection,
  };
}
