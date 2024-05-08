<script>
import TheAnalyticsTable from '@/analytics/components/the-analytics-table/the-analytics-table.component.vue'

export default {
  name: 'the-health-checks-page',
  components: { TheAnalyticsTable }
}
</script>

<template>
  <div class="mt-6" aria-label="The analytics table container">
    <the-analytics-table/>
  </div>
</template>

<style scoped>

</style>