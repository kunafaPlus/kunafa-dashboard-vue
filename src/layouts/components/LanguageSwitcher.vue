<template>
  <div class="relative" :id="id">
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-1 text-sm text-slate-800 dark:text-slate-100 hover:text-white bg-primary rounded px-3 py-2"
    >
      <span>{{ $t(`languages.${currentLanguage}`) }}</span>
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="dropdownOpen"
        class="absolute z-10 mt-2 w-32 origin-top-right rounded-md shadow-lg right-0"
        ref="dropdown"
      >
        <ul class="py-1 bg-primary">
          <li v-for="language in languages" :key="language.code">
            <button
              @click="changeLanguage(language)"
              class="block w-full px-2 py-2 text-sm text-center dark:text-slate-100 hover:text-white rounded-md"
            >
              {{ $t(`languages.${language.code}`) }}
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { detectRTL } from "@/services/LanguageService.js";

export default {
  name: "LanguageSwitcher",
  props: ["id"],
  emits: ["language-changed"],
  setup(props, { emit }) {
    const { locale, availableLocales } = useI18n();
    const dropdownOpen = ref(false);
    const selectedLanguage = ref("en");

    // Using availableLocale to get the languages dynamically then attach the lang direction to it
    var languages = availableLocales.map((lang) => {
      return { code: lang, direction: detectRTL(lang) ? "rtl" : "ltr" };
    });

    const currentLanguage = computed(() => locale.value); // ar, en, fr, etc.

    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value;
    };

    const closeDropdown = () => {
      dropdownOpen.value = false;
    };

    const changeLanguage = (lang) => {
      selectedLanguage.value = lang;
      emit("language-changed", lang.code);
      closeDropdown(); // Close dropdown after language change
    };

    const handleClickOutside = (event) => {
      if (dropdownOpen.value && !event.target.closest(".relative")) {
        closeDropdown();
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      dropdownOpen,
      selectedLanguage,
      languages,
      currentLanguage,
      toggleDropdown,
      changeLanguage,
    };
  },
};
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
