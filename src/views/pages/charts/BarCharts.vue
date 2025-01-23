<template>
  <div class="w-full justify-center">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">Bar Charts</h2>
    </header>
    <BarChart :chartData="chartData" :chartOptions="chartOptions"></BarChart>
  </div>
</template>

<script>
import { ref } from 'vue'
import BarChart from '@/views/charts/BarChart.vue'
import { generateRandomData, chartOptions } from '@/services/ChartService.js';

export default {
  name: "BarCharts",
  components: {
    BarChart,
  },
  setup(props, context) {
    const chartData = generateRandomData();

    return {
      chartData,
      chartOptions
    }
  }
}
</script>
