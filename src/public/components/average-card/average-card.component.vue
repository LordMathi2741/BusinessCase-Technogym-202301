<script>
import {HealthCheckService} from '@/shared/services/health-check-service/health-check.service.js'
import { HealthCheck } from '@/shared/services/model/health-check-model/health-check.entity.js'

export default {
  name: 'average-card',
  data(){
     return{
       healthCheckData:null,
       averagePerformance:[],
       healthChecks:[],
       healthCheckService: new HealthCheckService()
     }
  },
  methods:{
    getAverage: function(){
      let totalHp = 0;
      let totalWats = 0;
      let totalVolts = 0;

      this.healthChecks.forEach((healthCheckData) => {
        totalHp += healthCheckData.hp;
        totalWats += healthCheckData.wats;
        totalVolts += healthCheckData.volts;
      });

      this.averagePerformance = {
        hp: (totalHp / this.healthChecks.length).toFixed(2),
        wats:(totalWats / this.healthChecks.length).toFixed(2),
        volts: (totalVolts / this.healthChecks.length).toFixed(2)
      };
    },
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
  created(){
    this.getHealthChecks().then(()=>{
      this.getAverage();
    });
  }
}
</script>

<template>
  <pv-card class="pl-8 pr-8 p-7 bg-black-alpha-90 text-white" aria-label="Average card content">
    <template #content>
      <h2> Hp:{{averagePerformance.hp}}</h2>
      <h2> Volts: {{averagePerformance.volts}}</h2>
      <h2> Wats: {{averagePerformance.wats}}</h2>
    </template>
  </pv-card>
</template>

<style scoped>

</style>