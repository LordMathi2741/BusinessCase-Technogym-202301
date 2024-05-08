import axios from 'axios'

export class HealthCheckService{
   getAll(){
      return axios.get('http://localhost:3000/api/v1/health-checks')
   }
}