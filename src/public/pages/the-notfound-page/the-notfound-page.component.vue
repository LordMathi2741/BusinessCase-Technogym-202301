<script>

export default {
  name: 'the-notfound-page',
}
</script>

<template>
  <div class="flex justify-content-center align-content-center" aria-label="The notfound page container">
    <div class="flex flex-column gap-3 p-7" aria-label="The notfound page content">
      <h1> {{$t('title')}}</h1>
      <h2> {{$t('message')}}</h2>
      <router-link to="/home" aria-label="Go to home section">
        <pv-button class="bg-cyan-600 text-white border-transparent pl-7 pr-7 p-3 border-round-3xl">{{$t('home')}} </pv-button>
      </router-link>
    </div>
  </div>

</template>

<style scoped>

</style>