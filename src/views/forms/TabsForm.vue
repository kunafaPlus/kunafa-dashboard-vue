<template>
  <div class="col-span-1 bg-white p-8 rounded-2xl flex justify-center mx-2 w-1/2">
      <Vueform  class="max-w-md mx-auto">
        <template #empty>
          <!-- Title and Divider -->
          <StaticElement
              name="register_title"
              content="Tabs Form"
              tag="h1"
          />
          <StaticElement
              name="divider"
              tag="hr"
          />
          <FormTabs>
            <FormTab
                name="account"
                label="Account"
                :elements="['email', 'password']"
            />
            <FormTab
                name="personal"
                label="Personal"
                :elements="['name', 'bio']"
            />
            <FormTab
                name="social"
                label="Social"
                :elements="['facebook', 'twitter']"
            />
          </FormTabs>

          <FormElements>
            <TextElement
                name="email"
                label="Email"
            />
            <TextElement
                input-type="password"
                name="password"
                label="Password"
            />
            <TextElement
                name="name"
                label="Name"
            />
            <TextareaElement
                name="bio"
                label="bio"
            />
            <TextElement
                name="facebook"
                label="Facebook"
            />
            <TextElement
                name="twitter"
                label="Twitter"
            />
          </FormElements>
        </template>
      </Vueform>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "TabsForm",
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
    return {};
  },
};
</script>
