<template>
  <div class="w-full justify-center">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">Line Charts</h2>
    </header>
    <LineChart :chartData="chartData" :chartOptions="chartOptions"></LineChart>
  </div>
</template>

<script>
import { ref } from 'vue'
import LineChart from '@/views/charts/LineChart.vue'
import { generateRandomData, chartOptions } from '@/services/ChartService.js';

export default {
  name: "LineCharts",
  components: {
    LineChart,
  },
  setup() {
    const chartData = generateRandomData();

    return {
      chartData,
      chartOptions
    }
  }
}
</script>
