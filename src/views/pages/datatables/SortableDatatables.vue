<template>
  <div class="flex justify-center">
       <SortableDatatable />
  </div>
</template>

<script>
import { ref } from 'vue'
import SortableDatatable from '@/views/datatables/SortableDatatable.vue'

export default {
  name: "SortableDatatables",
  components: {
    SortableDatatable,
  },
  setup(props, context)
  {
    return {}
  }
}
</script>
