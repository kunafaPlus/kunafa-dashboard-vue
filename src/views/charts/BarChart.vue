<template>
  <div class="p-4">
     <chartComponent :chartData="chartData" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: 'BarChart',
  components: {chartComponent: BarChart},
  props: ['chartData', 'chartOptions'],
  setup(props) {
    return {};
  },
});
</script>
