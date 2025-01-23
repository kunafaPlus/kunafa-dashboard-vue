import { useI18n } from "vue-i18n";
import { computed } from "vue";

export default function useLangDirection() {
    const { locale } = useI18n();
    const currentLanguage = computed(() => locale.value);

    const detectRTL = () => {
        const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'dv', 'ku', 'mng'];
        return rtlLanguages.includes(currentLanguage.value);
    };

    const isRTL = computed(() => detectRTL());
    const langDirection = computed(() => isRTL.value ? 'rtl' : 'ltr');

    return {
        currentLanguage,
        langDirection,
    };
}
