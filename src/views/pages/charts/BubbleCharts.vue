<template>
  <div class="w-full justify-center">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">Bubble Charts</h2>
    </header>
    <BubbleChart :chartData="chartData" :chartOptions="chartOptions"></BubbleChart>
  </div>
</template>

<script>
import { ref } from 'vue'
import BubbleChart from '@/views/charts/BubbleChart.vue'
import { generateRandomData, chartOptions } from '@/services/ChartService.js';

export default {
  name: "BubbleCharts",
  components: {
    BubbleChart,
  },
  setup(props, context) {
    const chartData = ref({
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [
            { x: 20, y: 25, r: 5 },
            { x: 40, y: 10, r: 10 },
            { x: 30, y: 22, r: 30 }
          ]
        },
        {
          label: 'Data Two',
          backgroundColor: '#7C8CF8',
          data: [
            { x: 10, y: 30, r: 15 },
            { x: 20, y: 20, r: 10 },
            { x: 15, y: 8, r: 30 }
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
