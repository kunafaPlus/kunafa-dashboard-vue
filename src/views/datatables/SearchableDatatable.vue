<template>
  <input
      type="text"
      v-model="searchValue"
      class="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
      placeholder="Search..."
  > <br> <br>

  <EasyDataTable
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
import {PRODUCTS} from '@/constants/dummyDataEndpoints.js';

export default {
  name: "ServerSideDatatable",
  components: {
    EasyDataTable: Vue3EasyDataTable
  },

  setup() {
    const headers = ref([
      {text: "id", value: "id"},
      {text: "title", value: "title"},
      {text: "thumbnail", value: "thumbnail"},
      {text: "description", value: "description"},
      {text: "price", value: "price"},
      {text: "discountPercentage", value: "discountPercentage"},
      {text: "rating", value: "rating"},
      {text: "stock", value: "stock"},
      {text: "brand", value: "brand"},
      {text: "category", value: "category"},
    ]);

    const items = ref([]);
    const loading = ref(false);
    const searchValue = ref("");
    const fetchProductData = async () => {
      loading.value = true;
      const response = await fetch(`${PRODUCTS}/search?q=${searchValue.value}`);
      const data = await response.json();
      items.value = data.products;
      loading.value = false;
    };

    onMounted(fetchProductData);

    watch(searchValue, (value) => {
      fetchProductData();
    }, {deep: true});

    return {
      headers,
      items,
      loading,
      searchValue,
    };
  },
};
</script>
