<script setup>
</script>

<template>
  <div class="flex flex-col items-center gap-6 px-4 my-8">
    <div class="fof">
                <h1 class="va-h1 text-center sm:text-5xl text-4xl">{{$t('pages.errors.404.title')}}</h1>
    	</div>
        
      <p class="text-center">{{$t('pages.errors.404.message')}}</p>

      <div class="flex flex-col sm:flex-row gap-4">
        <RouterLink to="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{{$t('pages.errors.404.go_to_home_btn')}}</RouterLink>
        <a href="https://github.com/kunafaPlus/kunafa-dashboard-vue/issues/new/choose" preset="secondary" target="_blank"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <Icon class="!text-gray-800" icon="entypo-social:github" width="20" height="20" />
          <span class="mx-2">{{ $t('pages.errors.404.open_issue_github_btn') }}</span>
      </a>
      </div>
    </div>
</template>
<style scoped>
.fof{
	  display: table-cell;
	  vertical-align: middle;
}

.fof h1{
	  font-size: 50px;
	  display: inline-block;
	  padding-right: 12px;
	  animation: type .5s alternate infinite;
}

@keyframes type{
	  from{box-shadow: inset -3px 0px 0px #888;}
	  to{box-shadow: inset -3px 0px 0px transparent;}
}
</style>