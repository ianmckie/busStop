import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Connected');
  }

  getNearStops(lat, lng){
    return this.http.get('http://ianmckie.com/bustop-json/distance.php?lat='+lat+'&lng='+lng)
      .map(res => res.json());
  }
  
  getRTI(stopId){
    return this.http.get('http://ianmckie.com/bustop-json/rti-get.php?stopId='+stopId)
    .map(res => res.json());  
  }

}
