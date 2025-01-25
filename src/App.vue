<template>
  <div :dir="langDirection">
    <DefaultLayout>

      <template #content>
          <router-view />
      </template>

    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from './layouts/default.vue'
import SelectedLanguage from '@/services/LanguageService.js';

export default {
  components: {
    DefaultLayout
  },

  setup() {
    const { currentLanguage, langDirection } = SelectedLanguage();

    return {
      currentLanguage,
      langDirection,
    };
  },
};
</script>
