<template>
  <div class="w-full p-8 flex justify-center">
        <MultilingualFormsObject />
  </div>
</template>

<script>
import MultilingualForms from '@/views/forms/MultilingualForms.vue'
export default {
  name: "MultilingualForms",
  components: {
    MultilingualFormsObject: MultilingualForms, // to avoid loop with page itself
  },
  setup(props, context)
  {
    return {

    }
  }
}
</script>
