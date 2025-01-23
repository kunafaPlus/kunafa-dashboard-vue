<template>
  <div class="col-span-1 bg-white p-8 rounded-2xl flex justify-center mx-2 w-1/2">
      <Vueform v-bind="advanceForm" class="max-w-md mx-auto text-center" />
  </div>
</template>

<script>
import {ref, onMounted, computed} from 'vue'
import { useI18n } from 'vue-i18n';

export default {
  name: 'BasicObjectForm',
  props: {
    formTitle: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md'
    },
    displayErrors: {
      type: Boolean,
      default: true
    },
  },
  setup(props, context) {
    const { t } = useI18n();
    const advanceForm = ref({
      size: props.size,
      displayErrors: props.displayErrors,
      schema: {
        page_title: {
          type: 'static',
          content: props.formTitle || t('forms.titles.advance_object_form'),
          tag: 'h1',
        },
        divider: {
          type: 'static',
          tag: 'hr',
        },
        container: {
          type: 'group',
          schema: {
            title: {
              type: 'text',
              placeholder: 'article title',
              columns: {
                container: 12,
                label: 12,
                wrapper: 12,
              },
              fieldName: 'article title',
              rules: [
                'required',
                'max:255',
              ],
            },
            first_name: {
              type: 'Editor',
              placeholder: 'article content',
              columns: {
                container: 12,
                label: 12,
                wrapper: 12,
              },
              fieldName: 'article content',
              rules: [
                'required',
              ],
            },
          },
          description: 'write and add your styles',
        },
        anotherDetails: {
          type: 'TTextarea',
          placeholder: 'another details',
          columns: {
            container: 12,
            label: 12,
            wrapper: 12,
          },
          fieldName: 'another details',
          rules: [
            'required',
          ],
          description: 'add another details',
        },
        Slider: {
          type: 'Slider',
          placeholder: 'Slider',
          columns: {
            container: 12,
            label: 12,
            wrapper: 12,
          },
          fieldName: 'Slider',
          rules: [
            'required',
          ],
          description: 'Slider',
        },
        divider_1: {
          type: 'static',
          tag: 'hr',
        },
        register: {
          type: 'button',
          submits: true,
          buttonLabel: 'submit',
          full: true,
          size: 'md',
        },
      },
    });

    return {
      advanceForm,
    };
  },
};
</script>

<style scoped>

</style>
