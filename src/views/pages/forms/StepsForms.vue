<template>
  <div class="w-full p-8 flex justify-center">
        <StepsForm />
  </div>
</template>

<script>
import StepsForm from '@/views/forms/StepsForm.vue'
export default {
  name: "StepsForms",
  components: {
    StepsForm,
  },
  setup(props, context)
  {
    return {

    }
  }
}
</script>
