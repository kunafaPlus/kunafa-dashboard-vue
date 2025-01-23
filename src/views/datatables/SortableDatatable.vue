<template>
  <BaseDatatable
      :headers="headers"
      :items="products"
      :sortBy="sortBy"
      :sortType="sortType"
      @update:sortBy="updateSortBy"
      @update:sortType="updateSortType"
  />
</template>

<script>
// https://hc200ok.github.io/vue3-easy-data-table-doc/features/single-field-sorting.html
// https://hc200ok.github.io/vue3-easy-data-table-doc/features/multiple-fields-sorting.html

import { ref, onMounted } from 'vue';
import BaseDatatable from '@/components/datatables/BaseDatatable.vue';
import { fetchProducts, formattedProducts } from '@/services/productsService.js';
import { createSortVariables } from '@/utils/datatables/sortVariables.js';

export default {
  name: "SortableDatatable",
  components: {
    BaseDatatable,
  },

  setup() {
    const products = ref([]);
    const { sortBy, sortType, sortedBy, sortedType } = createSortVariables("id", "desc");

    onMounted(async () => {
      products.value = await fetchProducts();
    });

    const headers = ref([
      {text: "id", value: "id", sortable: true},
      {text: "title", value: "title", sortable: true},
      {text: "description", value: "description", sortable: true},
      {text: "price", value: "price", sortable: true},
      {text: "discountPercentage", value: "discountPercentage", sortable: true},
      {text: "rating", value: "rating", sortable: true},
      {text: "stock", value: "stock", sortable: true},
      {text: "brand", value: "brand", sortable: true},
      {text: "category", value: "category", sortable: true},
    ]);

    const formattedProductsList = formattedProducts(products);

    // to update sortBy and sortType when the user sorts the table
    const updateSortBy = (newSortBy) => {
      sortBy.value = newSortBy;
    };

    const updateSortType = (newSortType) => {
      sortType.value = newSortType;
    };

    return {
      products: formattedProductsList,
      headers,
      sortBy,
      sortType,
      sortedBy,
      sortedType,
      updateSortBy,
      updateSortType
    };
  }
}
</script>
