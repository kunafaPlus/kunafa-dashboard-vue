<template>
  <div class="w-full p-8 flex justify-center">
    <BasicObjectForm
        :form-title="$t('forms.titles.basic_object_form')"
        size="md"
        :displayErrors="false"
    />
    <AdvanceObjectForm
        :form-title="$t('forms.titles.advance_object_form')"
        size="md"
        :displayErrors="false"
    />
  </div>
</template>

<script>
import BasicObjectForm from '@/views/forms/BasicObjectForm.vue'
import AdvanceObjectForm from '@/views/forms/AdvanceObjectForm.vue'
export default {
  name: "ObjectForms",
  components: {
    BasicObjectForm,
    AdvanceObjectForm,
  },
  setup(props, context)
  {
    return {
    }
  }
}
</script>
