<script>


import { HealthCheckService } from '@/shared/services/health-check-service/health-check.service.js'
import { HealthCheck } from '@/shared/services/model/health-check-model/health-check.entity.js'

export default {
  name: 'the-analytics-table',
  data(){
    return {
      healthCheckData:null,
      healthChecks:[],
      healthCheckService: new HealthCheckService()
    }
  },
  methods:{
     async getHealthChecks(){
      await this.healthCheckService.getAll().then((response) => {
        response.data.forEach((healthCheck)=>{
          const {id, treadmillId, year,month,day,hour, minute,second,volts,wats,hp } = healthCheck;
          this.healthCheckData = new HealthCheck(id,treadmillId,year,month,day,hour,minute,second,volts,wats,hp);
          this.healthChecks.push(this.healthCheckData);
        })
      });
    }
  },
  computed:{
      recordId(){
        return this.$t('recordId');
    },
    treadmillId(){
      return this.$t('treadmillId');
    },
    year(){
      return this.$t('year');
    },
    month(){
      return this.$t('month');
    },
    day(){
      return this.$t('day');
    },
    hour(){
      return this.$t('hour');
    },
    minute(){
      return this.$t('minute');
    },
    second(){
      return this.$t('second');
    },
   volts(){
      return this.$t('volts');
    },
    wats(){
      return this.$t('wats');
    },
    hp(){
      return this.$t('hp');
    }

  },
  created(){
    this.getHealthChecks();
  }

}
</script>

<template>
  <pv-datatable :value="this.healthChecks" sortMode="multiple" paginator :rows="5" :rowsPerPageOptions="[1,2,5,10]" tableStyle="min-width: 50rem">
    <pv-column class="table-column" field="id" :header="recordId" sortable></pv-column>
    <pv-column class="table-column" field="treadmillId" :header="treadmillId" sortable></pv-column>
    <pv-column class="table-column" field="year" :header="year" sortable></pv-column>
    <pv-column class="table-column" field="month" :header="month" sortable></pv-column>
    <pv-column class="table-column" field="day" :header="day" sortable></pv-column>
    <pv-column class="table-column" field="hour" :header="hour" sortable></pv-column>
    <pv-column class="table-column" field="minute" :header="minute" sortable></pv-column>
    <pv-column class="table-column" field="second" :header="second" sortable></pv-column>
    <pv-column class="table-column" field="volts" :header="volts" sortable></pv-column>
    <pv-column class="table-column" field="wats" :header="wats" sortable></pv-column>
    <pv-column class="table-column" field="hp" :header="hp" sortable></pv-column>
  </pv-datatable>

</template>

<style scoped>

.table-column{
  width:25%;
}


</style>