<template>
  <div class="col-span-1 bg-white p-8 rounded-2xl flex justify-center mx-2 w-1/2">
    <Vueform
        size="lg"
        :display-errors="false"
        class="max-w-md mx-auto"
    >
      <!-- Title and Divider -->
      <StaticElement
          name="register_title"
          content="Advance Inline Form"
          tag="h1"
      />
      <StaticElement
          name="divider"
          tag="hr"
      /> <br> <br> <br>

      <!-- Select Element with Label -->
      <SelectElement
          name="framework"
          label="single select"
          :native="false"
          :items="[
          { value: 'vuejs', label: 'Vue.js' },
          { value: 'react', label: 'React' },
          { value: 'angularjs', label: 'AngularJS' },
        ]"
      />

      <!-- Multiselect Element with Label -->
      <MultiselectElement
          name="frameworks"
          label="multiple select"
          :native="false"
          :items="['Vue.js', 'React', 'AngularJS']"
      />

      <!-- Tags Element with Label -->
      <TagsElement
          name="tags"
          label="Tags select"
          :native="false"
          :items="{
          vuejs: 'Vue.js',
          react: 'React',
          angularjs: 'AngularJS'
        }"
      />

      <!-- File Element with Label -->
      <FileElement
          name="file"
          label="single file upload"
          :drop="true"
      />

      <!-- Multifile Element with Label -->
      <MultifileElement
          name="files"
          label="Multiple Files upload"
          :sort="true"
          :drop="true"
          view="gallery"
      />

      <!-- Static Element with Label -->
      <StaticElement
          name="divider_1"
          tag="hr"
      />
      <ButtonElement
          name="register"
          :submits="true"
          button-label="submit"
          :full="true"
          size="lg"
      />
    </Vueform>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: 'AdvanceInlineForm',
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
    return {}
  }
}
</script>
