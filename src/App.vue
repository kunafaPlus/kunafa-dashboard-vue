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
<<<<<<< HEAD
import DefaultLayout from './layouts/default.vue'
=======
import DefaultLayout from './layoutes/default.vue'
>>>>>>> d90b5ef (- Fix dark theme)
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
