<script>

export default {
  name: 'toolbar-content',
  methods:{
    changeLanguage(lan) {
      this.$i18n.locale = lan;
    }
  }
}
</script>

<template>
  <pv-toolbar class="bg-black-alpha-90" aria-label="Toolbar content">
    <template #start>
     <img src="https://www.technogym.com/skin/frontend/technogym/default/images/logo.svg" alt="branding logo" width="100" aria-label="branding logo">
    </template>

    <template #end>
      <div class="flex gap-3 mr-3">
        <router-link to="/home" class="router-text" aria-label="Go home section">
          <h2 class=" text cursor-pointer hover:text-yellow-500">{{$t('home')}}</h2>
        </router-link>
        <router-link to="/analytics/health-checks" class="router-text"  aria-label="Go health checks section">
          <h2 class=" text cursor-pointer hover:text-yellow-500">{{$t('healthChecks')}}</h2>
        </router-link>
      </div>
      <div class="flex gap-2" aria-label="Switcher language">
        <pv-button class=" bg-white text-black-alpha-90 border-transparent" @click="changeLanguage('en')" aria-label="Translate english"> EN </pv-button>
        <pv-button class=" bg-white text-black-alpha-90 border-transparent" @click="changeLanguage('es')" aria-label="Translate spanish"> ES </pv-button>
      </div>
    </template>
  </pv-toolbar>


</template>

<style scoped>
  .text:hover{
     transform: scale(1.1);
     transition: transform 1.5s;
  }
  .router-text{
    color:white;
    text-decoration: none;
  }
</style>