<template>
  <div class="w-full justify-center">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">Scatter Charts</h2>
    </header>
    <ScatterChart :chartData="chartData" :chartOptions="chartOptions"></ScatterChart>
  </div>
</template>

<script>
import { ref } from 'vue'
import ScatterChart from '@/views/charts/ScatterChart.vue'
import { generateRandomData, chartOptions } from '@/services/ChartService.js';

export default {
  name: "ScatterCharts",
  components: {
    ScatterChart,
  },
  setup(props, context) {
    const chartData = ref({
      datasets: [
        {
          label: 'Scatter Dataset 1',
          fill: false,
          borderColor: '#f87979',
          backgroundColor: '#f87979',
          data: [
            { x: -2, y: 4 },
            { x: -1, y: 1 },
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 4 }
          ]
        },
        {
          label: 'Scatter Dataset 2',
          fill: false,
          borderColor: '#7acbf9',
          backgroundColor: '#7acbf9',
          data: [
            { x: -2, y: -4 },
            { x: -1, y: -1 },
            { x: 0, y: 1 },
            { x: 1, y: -1 },
            { x: 2, y: -4 }
          ]
        }
      ]
    });

    return {
      chartData,
      chartOptions
    }
  }
}
</script>
