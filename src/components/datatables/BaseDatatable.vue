<template>
  <DataTable
      :headers="headers"
      buttons-pagination
      alternating
      border-cell
      :items="items"
      :sort-by.sync="sortBy"
      :sort-type.sync="sortType"
      theme-color="#1BB0E1"
      table-class-name="custom-easy-datatable"
      header-text-direction="center"
      body-text-direction="center"
  />
</template>

<script>
import { ref } from 'vue';
import Vue3EasyDataTable from 'vue3-easy-data-table';

export default {
  name: "BaseDatatable",
  components: {
    DataTable: Vue3EasyDataTable,
  },
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    sortBy: {
      type: String,
      default: "",
    },
    sortType: {
      type: String,
      default: "",
    },
  },
  emits: ["update:sortBy", "update:sortType"],
};
</script>
