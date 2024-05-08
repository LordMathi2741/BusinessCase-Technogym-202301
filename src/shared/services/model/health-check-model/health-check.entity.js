export class HealthCheck{
  constructor(id=0, treadmillId=0,year=0,month=0,day=0,hour=0,minute=0,second=0,volts=0,wats=0,hp=0){
    this.id = id;
    this.treadmillId=treadmillId;
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour=hour;
    this.minute = minute;
    this.second = second;
    this.volts = volts;
    this.wats = wats;
    this.hp = hp;
  }
}