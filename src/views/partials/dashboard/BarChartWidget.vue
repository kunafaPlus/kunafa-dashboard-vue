<template>
  <div class="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-2xl  border border-slate-200 dark:border-slate-700">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">Bar Chart Component</h2>
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
