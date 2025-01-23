<template>
  <div class="relative bg-secondary p-4 sm:p-6 rounded-2xl overflow-hidden mb-8">
    <!-- Background illustration -->
    <div class="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
      <svg width="319" height="198" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- SVG content remains the same -->
      </svg>
    </div>

    <!-- Content -->
    <div class="relative">
      <h1 class="text-2xl md:text-3xl text-black dark:text-black font-bold mb-1">
        <i class="fas fa-flag text-green-600 mr-2"></i> {{ $t('greetings.free_palestine') }}  🇵🇸
      </h1>
      <p class="dark:text-black">
        <i class="fas fa-handshake mr-2"></i> {{ $t('greetings.support_palestine') }}
      </p>
      <p class="text-red-900 font-bold flex items-center">
        <Icon icon="healthicons:stop-outline" class="xlg-icon mx-2" style="color: #bd0505" />
        {{ $t('greetings.no_to_the_policy_of_genocide') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeGreeting',
}
</script>
