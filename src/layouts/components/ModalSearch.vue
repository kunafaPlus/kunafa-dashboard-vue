<template>
  <!-- Modal backdrop -->
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-out duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-show="modalOpen" class="fixed inset-0 bg-slate-900 rounded-2xl  bg-opacity-30 z-50 transition-opacity" aria-hidden="true"></div>
  </transition>
  <!-- Modal dialog -->
  <transition
    enter-active-class="transition ease-in-out duration-200"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in-out duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div v-show="modalOpen" :id="id" class="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6" role="dialog" aria-modal="true">
      <div ref="modalContent" class="bg-white dark:bg-slate-800 border border-transparent dark:border-slate-700 overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg">
        <!-- Search form -->
        <form class="border-b border-slate-200 dark:border-slate-700">
          <div class="relative">
            <label :for="searchId" class="sr-only">Search</label>
            <input :id="searchId" class="w-full dark:text-slate-300 bg-white dark:bg-slate-800 border-0 focus:ring-transparent placeholder-slate-400 dark:placeholder-slate-500 appearance-none py-3 pl-10 pr-4" type="search" placeholder="Search Anything…" ref="searchInput" />
            <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search">
              <Icon icon="lets-icons:search" />
            </button>
          </div>
        </form>
        <div class="py-4 px-2">
          <div class="mb-3 last:mb-0">
<!--            <div class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase px-2 mb-2">Recent searches</div>-->
          <!-- TODO: add functionality to search -->
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue'

export default {
  name: 'ModalSearch',
  props: ['id', 'searchId', 'modalOpen'],
  emits: ['open-modal', 'close-modal'],
  setup(props, { emit }) {

    const modalContent = ref(null)
    const searchInput = ref(null)

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!props.modalOpen || modalContent.value.contains(target)) return
      emit('close-modal')
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!props.modalOpen || keyCode !== 27) return
      emit('close-modal')
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    watch(() => props.modalOpen, (open) => {
      open && nextTick(() => searchInput.value.focus())
    })

    return {
      modalContent,
      searchInput,
    }
  }
}
</script>
