<template>
  <div class="p-4">
    <chartComponent :chartData="chartData" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { RadarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: 'RadarChart',
  components: {chartComponent: RadarChart},
  props: ['chartData', 'chartOptions'],
  setup(props) {
    return {};
  },
});
</script>
