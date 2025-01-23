<template>
  <div class="w-full justify-center">
        <BasicDatatable />
  </div>
</template>

<script>
import { ref } from 'vue'
import BasicDatatable from '@/views/datatables/BasicDatatable.vue'

export default {
  name: "BasicDatatables",
  components: {
    BasicDatatable,
  },
  setup(props, context)
  {
    return {}
  }
}
</script>
