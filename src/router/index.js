import { createRouter, createWebHistory } from 'vue-router'
import MainDashboard from '@/views/pages/dashboard/MainDashboard.vue'
import ObjectForms from '@/views/pages/forms/ObjectForms.vue'
import InlineForms from '@/views/pages/forms/InlineForms.vue'
import StepsForms from '@/views/pages/forms/StepsForms.vue'
import TabsForms from '@/views/pages/forms/TabsForms.vue'
// import MultilingualForms from '@/views/pages/forms/MultilingualForms.vue' // still has bug
import BasicDatatables from '@/views/pages/datatables/BasicDatatables.vue'
import SortableDatatables from '@/views/pages/datatables/SortableDatatables.vue'
import SearchableDatatables from '@/views/pages/datatables/SearchableDatatables.vue'
import ServerSideDatatables from '@/views/pages/datatables/ServerSideDatatables.vue'
import BarCharts from '@/views/pages/charts/BarCharts.vue'
import BubbleCharts from '@/views/pages/charts/BubbleCharts.vue'
import DoughnutCharts from '@/views/pages/charts/DoughnutCharts.vue'
import LineCharts from '@/views/pages/charts/LineCharts.vue'
import PieCharts from '@/views/pages/charts/PieCharts.vue'
import PolarAreaCharts from '@/views/pages/charts/PolarAreaCharts.vue'
import RadarCharts from '@/views/pages/charts/RadarCharts.vue'
import ScatterCharts from '@/views/pages/charts/ScatterCharts.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: MainDashboard,
      meta: {
        label: 'dashboard',
        icon: 'ion:home'
      }
    },
    {
      path: '/forms',
      meta: {
        label: 'forms',
        icon: 'tdesign:form'
      },
      children: [
        {
          path: '/forms/object-forms',
          component: ObjectForms,
          meta: {
            label: 'object forms',
            icon: 'ant-design:form-outlined'
          }
        },
        {
          path: '/forms/inline-forms',
          component: InlineForms,
          meta: {
            label: 'Inline forms',
            icon: 'fluent:form-20-regular'
          }
        },
        {
          path: '/forms/tabs-forms',
          component: TabsForms,
          meta: {
            label: 'Tabs forms',
            icon: 'icon-park-outline:form-one'
          }
        },
        {
          path: '/forms/steps-forms',
          component: StepsForms,
          meta: {
            label: 'Steps forms',
            icon: 'clarity:form-line'
          }
        },
        // { // still has bug
        //   path: '/forms/multilingual-forms',
        //   component: MultilingualForms,
        //   meta: {
        //     label: 'multilingual forms',
        //     icon: 'fluent:form-48-regular'
        //   }
        // }
      ]
    },
    {
      path: '/datatables',
      meta: {
        label: 'datatables',
        icon: 'tabler:table'
      },
      children: [
        {
          path: '/datatables/basic-datatables',
          component: BasicDatatables,
          meta: {
            label: 'basic datatables',
            icon: 'material-symbols-light:table-sharp'
          }
        },
        {
          path: '/datatables/sortable-datatables',
          component: SortableDatatables,
          meta: {
            label: 'sortable datatables',
            icon: 'fluent:table-edit-16-regular'
          }
        },
        {
          path: '/datatables/serverside-datatables',
          component: ServerSideDatatables,
          meta: {
            label: 'serverside datatables',
            icon: 'material-symbols-light:data-table-outline'
          }
        },
        {
          path: '/datatables/searchable-datatables',
          component: SearchableDatatables,
          meta: {
            label: 'searchable datatables',
            icon: 'material-symbols:table-rows-outline'
          }
        },
      ]
    },
    {
      path: '/charts',
      meta: {
        label: 'charts',
        icon: 'solar:chart-bold'
      },
      children: [
        {
          path: '/charts/bar-charts',
          component: BarCharts,
          meta: {
            label: 'bar charts',
            icon: 'solar:chart-bold'
          }
        },
        {
          path: '/charts/bubble-charts',
          component: BubbleCharts,
          meta: {
            label: 'bubble charts',
            icon: 'ic:outline-bubble-chart'
          }
        },
        {
          path: '/charts/doughnut-charts',
          component: DoughnutCharts,
          meta: {
            label: 'doughnut charts',
            icon: 'mdi:chart-arc'
          }
        },
        {
          path: '/charts/line-charts',
          component: LineCharts,
          meta: {
            label: 'line charts',
            icon: 'ph:chart-line'
          }
        },
        {
          path: '/charts/pie-charts',
          component: PieCharts,
          meta: {
            label: 'pie charts',
            icon: 'bi:pie-chart'
          }
        },
        {
          path: '/charts/polar-area-charts',
          component: PolarAreaCharts,
          meta: {
            label: 'polar area charts',
            icon: 'ph:chart-polar-light'
          }
        },
        {
          path: '/charts/reader-charts',
          component: RadarCharts,
          meta: {
            label: 'reader charts',
            icon: 'tabler:chart-radar'
          }
        },
        {
          path: '/charts/scatter-charts',
          component: ScatterCharts,
          meta: {
            label: 'scatter charts',
            icon: 'tabler:chart-scatter'
          }
        },
      ]
    },
    {
      name: '404',
      path: '/404',
      component: () => import('@/views/pages/errors/404.vue'),
      meta: {
        label: '404',
        icon: 'bx:bx-error'
      }
    },
  ]
})

export default router
