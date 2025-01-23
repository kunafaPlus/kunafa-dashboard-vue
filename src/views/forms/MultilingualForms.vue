<template>
  <div class="col-span-1 bg-white p-8 rounded-2xl flex justify-center mx-2 w-1/2">
    <Vueform class="max-w-md mx-auto">
      <template #empty>
        <!-- Title and Divider -->
        <StaticElement
            name="register_title"
            content="Multi Language Form"
            tag="h1"
        />
        <StaticElement
            name="divider"
            tag="hr"
        />
        <FormLanguages>
          <FormLanguage
              language="English"
              code="en"
          />
          <FormLanguage
              language="Chinese"
              code="zh"
          />
        </FormLanguages>

        <FormElements>
          <TTextElement
              name="title"
              label="Title"
          />
          <TEditorElement
              name="article"
              placeholder="Article content..."
          />
        </FormElements>
      </template>
    </Vueform>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "MultilingualForms",
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
