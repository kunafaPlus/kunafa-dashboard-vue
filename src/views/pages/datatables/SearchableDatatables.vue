<template>
  <div class="w-full justify-center">
        <SearchableDatatable />
  </div>
</template>

<script>
import { ref } from 'vue'
import SearchableDatatable from '@/views/datatables/SearchableDatatable.vue'

export default {
  name: "SearchableDatatables",
  components: {
    SearchableDatatable,
  },
  setup(props, context)
  {
    return {}
  }
}
</script>
