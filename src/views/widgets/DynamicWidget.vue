<template>
  <div :class="widgetClass">
    <div class="px-5 pt-5">
      <header class="flex justify-between items-start mb-2">
        <!-- Icon -->
        <EditMenu align="right" class="relative inline-flex" v-if="options">
          <li v-for="(option, index) in options" :key="index">
            <a :class="option.classes" href="#0">{{ option.text }}</a>
          </li>
        </EditMenu>
      </header>
      <h2 v-if="title" class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">{{ title }}</h2>
      <div v-if="subtitle" class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">{{ subtitle }}</div>
      <!-- User-defined content slot -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import EditMenu from '../../layouts/components/DropdownEditMenu.vue'
=======
import EditMenu from '../../layoutes/components/DropdownEditMenu.vue'
>>>>>>> d90b5ef (- Fix dark theme)

export default {
  name: 'DynamicWidget',
  props: {
    widgetClass: String,
    options: Array,
    title: String,
    subtitle: String,
  },
  components: {
    EditMenu
  }
}
</script>

<style>

</style>
