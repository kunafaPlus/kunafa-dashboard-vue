<template>
  <EasyDataTable
      v-model:server-options="serverOptions"
      :server-items-length="serverItemsLength"
      :loading="loading"
      :headers="headers"
      :items="items"
      theme-color="#1BB0E1"
      table-class-name="custom-easy-datatable"
      header-text-direction="center"
      body-text-direction="center"
  >
    <template #item-thumbnail="{ thumbnail,title }">
      <div class="dt-thumbnail-wrapper content-center items-center">
        <img :src="thumbnail" :alt="title" class="rounded"/>
      </div>
    </template>
  </EasyDataTable>
</template>

<script>
import {onMounted, ref, watch} from "vue";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import { PRODUCTS } from '@/constants/dummyDataEndpoints.js';

export default {
  name:"ServerSideDatatable",
  components: {
    EasyDataTable: Vue3EasyDataTable
  },

  setup() {
    const headers = ref([
      { text: "id", value: "id" },
      { text: "title", value: "title"},
      { text: "thumbnail", value: "thumbnail"},
      { text: "description", value: "description"},
      { text: "price", value: "price"},
      { text: "discountPercentage", value: "discountPercentage"},
      { text: "rating", value: "rating"},
      { text: "stock", value: "stock"},
      { text: "brand", value: "brand"},
      { text: "category", value: "category"},
    ]);

    const items = ref([]);
    const loading = ref(false);
    const serverItemsLength = ref(0);
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 10,
      sortBy: 'id',
      sortType: 'desc',
    });
    const searchValue = ref("");

    const fetchProductData = async () => {
      loading.value = true;
      const { page, rowsPerPage } = serverOptions.value;
      const response = await fetch(`${PRODUCTS}?limit=${rowsPerPage}&skip=${(page - 1) * rowsPerPage}`);
      const data = await response.json();
      items.value = data.products;
      serverItemsLength.value = data.total;
      loading.value = false;
    };

    onMounted(fetchProductData);

    watch(serverOptions, (value) => { fetchProductData(); }, { deep: true });
    watch(searchValue, (value) => { fetchProductData(); }, { deep: true });

    return {
      headers,
      items,
      loading,
      searchValue,
      serverItemsLength,
      serverOptions,
    };
  },
};
</script>
