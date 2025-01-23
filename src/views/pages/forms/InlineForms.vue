<template>
  <div class="w-full p-8 flex justify-center">
        <BasicInlineForm />
        <AdvanceInlineForm />
  </div>
</template>

<script>
import BasicInlineForm from '@/views/forms/BasicInlineForm.vue'
import AdvanceInlineForm from '@/views/forms/AdvanceInlineForm.vue'
export default {
  name: "InlineForms",
  components: {
    BasicInlineForm,
    AdvanceInlineForm,
  },
  setup(props, context)
  {
    return {}
  }
}
</script>
