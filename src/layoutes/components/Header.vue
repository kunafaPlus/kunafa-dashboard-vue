<template>
  <header class="sticky top-0 bg-white dark:bg-[#182235] border-b rounded-2xl border-slate-200 dark:border-slate-700 z-30">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 -mb-px">

        <!-- Header: Left side -->
        <div class="flex">

          <!-- Hamburger button -->
          <button class="text-slate-500 hover:text-slate-600 lg:hidden" @click.stop="$emit('toggle-sidebar')" aria-controls="sidebar" :aria-expanded="sidebarOpen">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>

        </div>

          <div class="flex items-center space-x-3">
            <div>
              <button class="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ml-3" :class="{ 'bg-slate-200': searchModalOpen }" @click.stop="searchModalOpen = true" aria-controls="search-modal">
                <span class="sr-only">Search</span>
                <Icon icon="lets-icons:search" />
              </button>
              <SearchModal id="search-modal" searchId="search" :modalOpen="searchModalOpen" @open-modal="searchModalOpen = true" @close-modal="searchModalOpen = false" />
              </div>

              <div>
              <LanguageSwitcher
                  :id="'language-switcher-modal'"
                  :languageId="'language-select'"
                  @language-changed="onLanguageChanged"
              />
            </div>
            <QuickAddPanel align="right" />
            <Notifications align="right" />
            <ThemeToggle />
            <!-- Divider -->
            <hr class="w-px h-6 bg-slate-200 dark:bg-slate-700 border-none" />
            <UserMenu align="right" />
          </div>

      </div>
    </div>
  </header>
</template>

<script>
import { ref, inject , computed } from 'vue'
import SearchModal from '../components/ModalSearch.vue'
import Notifications from '../components/DropdownNotifications.vue'
import QuickAddPanel from '../components/QuickAddPanel.vue'
import ThemeToggle from '../components/ThemeToggle.vue'
import UserMenu from '../components/Profile.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import {useI18n} from "vue-i18n";
import { Icon } from '@iconify/vue';

export default {
  name: 'Header',
  props: ['sidebarOpen'],
  emits: [ 'language-changed'],
  components: {
    SearchModal,
    LanguageSwitcher,
    Notifications,
    QuickAddPanel,
    ThemeToggle,
    UserMenu,
    Icon,
  },
  setup() {
    const searchModalOpen = ref(false)
    const { locale } = useI18n();
    const onLanguageChanged = inject('$onLanguageChanged')
    const currentLanguage = computed(() => locale.value);

    return {
      searchModalOpen,
      onLanguageChanged,
      currentLanguage,
    }
  }
}
</script>

