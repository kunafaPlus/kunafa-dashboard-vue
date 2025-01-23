<template>
  <div class="col-span-1 bg-white p-8 rounded-2xl flex justify-center mx-2 w-1/2">
    <Vueform v-bind="basicForm" class="max-w-md mx-auto text-center" />
  </div>
</template>

<script>
import {ref, onMounted, computed} from 'vue'
import { useI18n } from 'vue-i18n';
import countries from '@/dummy-data/countries.js'
import states from '@/dummy-data/states.js'

// another way to customize countries and cities lists
// import countriesData from '@/dummy-data/countries.json'
// import citiesData from '@/dummy-data/cities.json'

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

    onMounted(() => {

    })

    const basicForm = ref({
      size: props.size,
      displayErrors: props.displayErrors,
      schema: {
        page_title: {
          type: 'static',
          content: props.formTitle || t('forms.titles.basic_object_form'),
          tag: 'h1',
        },
        divider: {
          type: 'static',
          tag: 'hr',
        },
        container: {
          type: 'group',
          schema: {
            first_name: {
              type: 'text',
              placeholder: 'First name',
              columns: {
                container: 6,
                label: 12,
                wrapper: 12,
              },
              fieldName: 'First name',
              rules: [
                'required',
                'max:255',
              ],
            },
            last_name: {
              type: 'text',
              placeholder: 'Last name',
              columns: {
                container: 6,
                label: 12,
                wrapper: 12,
              },
              fieldName: 'Last name',
              rules: [
                'required',
                'max:255',
              ],
            },
          },
          description: 'Make sure it matches your legal name',
        },
        birthday: {
          type: 'date',
          placeholder: 'Birthday',
          fieldName: 'Birthday',
          rules: [
            'required',
          ],
          description: 'Your birthday is not visible others.',
          displayFormat: 'MMMM Do, YYYY',
        },
        country: {
          type: 'select',
          search: true,
          native: false,
          inputType: 'search',
          autocomplete: 'disabled',
          placeholder: 'Country',
          items:countries,

          // another way to customize countries and cities lists
          // items: countriesData.map(country => ({
          //   // label: country.name,
          //   label: country.native,
          //   value: country.iso2,
          // })),
        },
        state: {
          type: 'select',
          search: true,
          native: false,
          inputType: 'search',
          autocomplete: 'disabled',
          placeholder: 'State',
          items:states,

          // another way to customize countries and cities lists
          // items: citiesData.map(city => ({
          //   label: city.name,
          //   value: city.state_code,
          // })),
          conditions: [
            [
              'country',
              'in',
              [ // TODO: add filter to return states depend on selected country
                'US','YE','UK','AR','LY','WS'
              ],
            ],
          ],
        },
        phone: {
          type: 'text',
          inputType: 'tel',
          placeholder: 'Phone',
          rules: [
            'required',
          ],
          fieldName: 'Phone',
        },
        email: {
          type: 'text',
          inputType: 'email',
          rules: [
            'required',
            'max:255',
            'email',
          ],
          placeholder: 'Email',
          fieldName: 'Email',
          description: 'You will receive a confirmation letter to this email.',
        },
        password: {
          type: 'text',
          inputType: 'password',
          rules: [
            'required',
            'min:8',
            'same:password_confirmation',
          ],
          fieldName: 'Password',
          placeholder: 'Password',
        },
        password_confirmation: {
          type: 'text',
          inputType: 'password',
          rules: [
            'required',
          ],
          fieldName: 'Password confirmation',
          placeholder: 'Password again',
        },
        terms: {
          type: 'checkbox',
          text: 'I accept the Terms & Conditions & Privacy Policy',
        },
        marketing_emails: {
          type: 'checkbox',
          text: 'I want to recieve marketing emails',
        },
        divider_1: {
          type: 'static',
          tag: 'hr',
        },
        register: {
          type: 'button',
          submits: true,
          buttonLabel: 'Create account',
          full: true,
          size: 'lg',
        },
      },
    })

    return {
      basicForm,
    }
  }
}
</script>
