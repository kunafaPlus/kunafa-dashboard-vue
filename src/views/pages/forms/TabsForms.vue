<template>
  <div class="w-full p-8 flex justify-center">
        <TabsForm />
  </div>
</template>

<script>
import TabsForm from '@/views/forms/TabsForm.vue'
export default {
  name: "TabsForms",
  components: {
    TabsForm,
  },
  setup(props, context)
  {
    return {

    }
  }
}
</script>
