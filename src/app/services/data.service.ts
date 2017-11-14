import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Connected');
  }

  getNearStops(){
    return this.http.get('http://ianmckie.com/bustop-json/distance.php')
      .map(res => res.json());
  }

}
