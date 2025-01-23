<template>
  <div class="w-full justify-center">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">Radar Charts</h2>
    </header>
    <RadarChart :chartData="chartData" :chartOptions="chartOptions"></RadarChart>
  </div>
</template>

<script>
import { ref } from 'vue'
import RadarChart from '@/views/charts/RadarChart.vue'
import { generateRandomData, chartOptions } from '@/services/ChartService.js';

export default {
  name: "RadarCharts",
  components: {
    RadarChart,
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
