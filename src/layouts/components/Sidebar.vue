<template>
  <div>
    <!-- Sidebar backdrop (mobile only) -->
    <div
      class="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto rounded-2xl transition-opacity duration-200"
      :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      aria-hidden="true"
    ></div>

    <!-- Sidebar -->
    <div
      id="sidebar"
      ref="sidebar"
      class="flex flex-col absolute z-40 ltr:left-0 rtl:right-0 top-0 lg:static ltr:lg:left-auto rtl:lg:right-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out"
      :class="sidebarOpen ? 'translate-x-0' : translateClass"
    >
      <!-- Sidebar header -->
      <div
        class="flex justify-between items-center mb-10 ltr:pr-3 rtl:pl-3 sm:px-2"
      >
        <!-- Close button -->
        <button
          ref="trigger"
          class="lg:hidden text-slate-500 hover:text-slate-400"
          @click.stop="$emit('close-sidebar')"
          aria-controls="sidebar"
          :aria-expanded="sidebarOpen"
        >
          <span class="sr-only">Close sidebar</span>
          <Icon icon="mdi-light:speedometer" />
        </button>
        <!-- Logo and system name -->
        <router-link class="flex items-center" to="/">
          <KunafaLogo />
        </router-link>
      </div>

      <!-- Links -->
      <div class="space-y-8">
        <ul class="mt-3">
          <SidebarLinkGroup
            v-slot="parentLink"
            v-for="route in routes"
            :key="route.meta.label"
            class="rounded-2xl"
          >
            <!-- childrens sidebar menu item -->
            <template v-if="route.children">
              <a
                class="block text-slate-200 truncate px-2 transition duration-150"
                :class="
                  currentRoute &&
                  currentRoute.fullPath.includes(route.meta.label)
                    ? 'hover:text-slate-200'
                    : 'hover:text-white'
                "
                href="#0"
                @click.prevent="
                  sidebarExpanded
                    ? parentLink.handleClick()
                    : (sidebarExpanded = true)
                "
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <Icon :icon="route.meta.icon" />
                    <span
                      class="text-sm font-medium ltr:ml-3 rtl:mr-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                      >{{ route.meta.label }}</span
                    >
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ltr:ml-2 rtl:mr-2">
                    <svg
                      class="w-3 h-3 shrink-0 ltr:ml-1 rtl:mr-1 fill-current text-slate-400"
                      :class="parentLink.expanded && 'rotate-180'"
                      viewBox="0 0 12 12"
                    >
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <!-- childrens sub menu-->
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul
                  class="ltr:pl-5 rtl:pr-5 mt-1"
                  :class="!parentLink.expanded && 'hidden'"
                >
                  <template v-for="child in route.children" :key="child.name">
                    <router-link
                      :to="child.path"
                      custom
                      v-slot="{ href, navigate, isExactActive }"
                    >
                      <li class="mb-1 last:mb-0">
                        <a
                          class="flex items-center block transition duration-150 truncate"
                          :class="
                            isExactActive
                              ? 'text-indigo-500'
                              : 'text-slate-400 hover:text-slate-200'
                          "
                          :href="href"
                          @click="navigate"
                        >
                          <Icon :icon="child.meta.icon" class="sm-icon" />
                          <span
                            class="text-sm font-medium ltr:ml-2 rtl:mr-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                            >{{ child.meta.label }}</span
                          >
                        </a>
                      </li>
                    </router-link>
                  </template>
                </ul>
              </div>
            </template>
            <!-- no childrens sidebar menu item -->
            <template v-else>
              <router-link
                :to="route.path"
                custom
                v-slot="{ href, navigate, isExactActive }"
              >
                <li
                  class="py-2 rounded-sm mb-0.5 px-2 last:mb-0"
                  :class="isExactActive && 'bg-slate-900'"
                >
                  <a
                    class="block text-slate-200 truncate transition duration-150"
                    :class="
                      isExactActive
                        ? 'hover:text-slate-200'
                        : 'hover:text-white'
                    "
                    :href="href"
                    @click="navigate"
                  >
                    <div class="flex items-center">
                      <Icon :icon="route.meta.icon" />
                      <span
                        class="text-sm font-medium ltr:ml-3 rtl:mr-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                        >{{ route.meta.label }}</span
                      >
                    </div>
                  </a>
                </li>
              </router-link>
            </template>
          </SidebarLinkGroup>
        </ul>
      </div>

      <!-- Expand / collapse button -->
      <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
        <div class="px-3 py-2">
          <button @click.prevent="sidebarExpanded = !sidebarExpanded">
            <span class="sr-only">Expand / collapse sidebar</span>
            <svg
              class="w-6 h-6 fill-current sidebar-expanded:rotate-180"
              viewBox="0 0 24 24"
            >
              <path
                class="text-slate-400"
                d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
              />
              <path class="text-slate-600" d="M3 23H1V1h2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch, computed } from "vue";
import { useRouter } from "vue-router"; // Import useRouter
import SidebarLinkGroup from "../../layouts/components/SidebarLinkGroup.vue";
import { useI18n } from "vue-i18n";
import SelectedLanguage from "@/services/LanguageService.js";
import KunafaLogo from "./KunafaLogo.vue";

export default {
  name: "Sidebar",
  props: ["sidebarOpen"],
  components: {
    SidebarLinkGroup,
    KunafaLogo,
  },
  setup(props, { emit }) {
    const routes = ref([]);
    const router = useRouter(); // Use useRouter to get the router instance
    const trigger = ref(null);
    const sidebar = ref(null);
    const { locale } = useI18n();
    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    const sidebarExpanded = ref(
      storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
    );
    const currentRoute = router.currentRoute.value; // Use router directly
    const { currentLanguage, langDirection } = SelectedLanguage();
    // close on click outside
    const clickHandler = ({ target }) => {
      if (!sidebar.value || !trigger.value) return;
      if (
        !props.sidebarOpen ||
        sidebar.value.contains(target) ||
        trigger.value.contains(target)
      )
        return;
      emit("close-sidebar");
    };

    const setRoutes = () => {
      routes.value = router.options.routes; // Use router directly
    };
    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return;
      emit("close-sidebar");
    };

    onMounted(() => {
      setRoutes();
      document.addEventListener("click", clickHandler);
      document.addEventListener("keydown", keyHandler);
    });

    onUnmounted(() => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    });

    const translateClass = computed(() => {
      return langDirection.value === "rtl"
        ? "translate-x-64"
        : "-translate-x-64";
    });

    watch(sidebarExpanded, () => {
      localStorage.setItem("sidebar-expanded", sidebarExpanded.value);
      if (sidebarExpanded.value) {
        document.querySelector("body").classList.add("sidebar-expanded");
      } else {
        document.querySelector("body").classList.remove("sidebar-expanded");
      }
    });

    return {
      router,
      routes,
      trigger,
      sidebar,
      sidebarExpanded,
      currentRoute,
      currentLanguage,
      langDirection,
      translateClass,
    };
  },
};
</script>
