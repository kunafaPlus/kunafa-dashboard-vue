<template>
  <div class="w-full justify-center">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">Polar Area Charts</h2>
    </header>
    <PolarAreaChart :chartData="chartData" :chartOptions="chartOptions"></PolarAreaChart>
  </div>
</template>

<script>
import { ref } from 'vue'
import PolarAreaChart from '@/views/charts/PolarAreaChart.vue'
import { generateRandomData, chartOptions } from '@/services/ChartService.js';

export default {
  name: "PolarAreaCharts",
  components: {
    PolarAreaChart,
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
