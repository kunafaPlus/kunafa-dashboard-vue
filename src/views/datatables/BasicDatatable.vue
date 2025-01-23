<template>
  <BaseDatatable :headers="productsTableHeaders" :items="products" />
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchProducts, formattedProducts, productsTableHeaders } from '@/services/productsService.js';
import BaseDatatable from '@/components/datatables/BaseDatatable.vue' // or you can use Vue3EasyDataTable directly // https://hc200ok.github.io/vue3-easy-data-table-doc/
// import Vue3EasyDataTable from 'vue3-easy-data-table';

export default {
  name:"BasicDatatable",
  components: {
    BaseDatatable
  },

  setup() {
    const products = ref([]);

    onMounted(async () => {
      products.value = await fetchProducts();
    });

    const formattedProductsList = formattedProducts(products);

    return {
      products: formattedProductsList,
      productsTableHeaders,
    };
  }
}
</script>
