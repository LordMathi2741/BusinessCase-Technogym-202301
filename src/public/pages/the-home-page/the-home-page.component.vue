<script>
import AverageCard from '@/public/components/average-card/average-card.component.vue'

export default {
  name: 'the-home-page',
  components: { AverageCard }
}
</script>

<template>
  <h1 class="text-center"> {{$t('homeTitle')}}</h1>
  <div class="flex justify-content-center" aria-label="Average cards container">
    <average-card/>
  </div>
</template>

<style scoped>

</style>