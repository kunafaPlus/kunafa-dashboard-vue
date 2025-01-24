<template>
  <div class="flex h-screen overflow-hidden">

    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="p-6 m-2">
        <slot name="content" />
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Sidebar,
    Header,
  },
  setup() {
    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }
  }
}
</script>
