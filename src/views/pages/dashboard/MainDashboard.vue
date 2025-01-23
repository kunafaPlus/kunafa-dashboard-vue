<template>
    <div class="w-full p-2 justify-center">
    <WelcomeGreeting />
      <div class="sm:flex sm:justify-between sm:items-center mb-8">
        <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
        </div>
      </div>

          <div class="grid grid-cols-12 gap-6">
<!--            <DynamicWidget-->
<!--                widgetClass="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-2xl border border-slate-200 dark:border-slate-700"-->
<!--                :options="menuOptions"-->
<!--                title="My Widget Title"-->
<!--                subtitle="My Widget Subtitle"-->
<!--            >-->
<!--              <div class="flex items-start">-->
<!--                <div class="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2"> test content </div>-->
<!--              </div>-->
<!--            </DynamicWidget>-->

<!--              <DynamicWidget-->
<!--                  widgetClass="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-2xl border border-slate-200 dark:border-slate-700"-->
<!--                  :options="menuOptions"-->
<!--                  title="My Widget Title"-->
<!--                  subtitle="My Widget Subtitle"-->
<!--              >-->
<!--              </DynamicWidget>-->

            <BarChartWidget />
            <LineChartWidget />
          </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import DynamicWidget from '@/views/widgets/DynamicWidget.vue'
import WelcomeGreeting from '@/views/partials/dashboard/WelcomeGreeting.vue'
import BarChartWidget from '@/views/partials/dashboard/BarChartWidget.vue'
import LineChartWidget from '@/views/partials/dashboard/LineChartWidget.vue'

export default {
  name: 'MainDashboard',
  components: {
    WelcomeGreeting,
    DynamicWidget,
    BarChartWidget,
    LineChartWidget,
  },
  setup() {

    const sidebarOpen = ref(false)

    const menuOptions = [
      { text: 'Option 1', classes: 'font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3' },
      { text: 'Option 2', classes: 'font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3' },
      { text: 'Remove', classes: 'font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3' }
    ]

    return {
      sidebarOpen,
      menuOptions,
    }
  }
}
</script>
