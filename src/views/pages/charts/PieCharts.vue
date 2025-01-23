<template>
  <div class="w-full justify-center">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">Pie Charts</h2>
    </header>
    <PieChart :chartData="chartData" :chartOptions="chartOptions"></PieChart>
  </div>
</template>

<script>
import { ref } from 'vue'
import PieChart from '@/views/charts/PieChart.vue'
import { generateRandomData, chartOptions } from '@/services/ChartService.js';

export default {
  name: "PieCharts",
  components: {
    PieChart,
  },
  setup() {
    const chartData = generateRandomData();

    return {
      chartData,
      chartOptions,
    }
  }
}
</script>
