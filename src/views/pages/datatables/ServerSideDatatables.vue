<template>
  <div class="w-full justify-center">
    <ServerSideDatatable />
  </div>
</template>

<script>
import { ref } from 'vue'
import ServerSideDatatable from '@/views/datatables/ServerSideDatatable.vue'

export default {
  name:"ServerSideDatatables",
  components: {
    ServerSideDatatable,
  },
  setup(props, context)
  {
    return {}
  }
}
</script>
