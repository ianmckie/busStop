import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Jsonp } from '@angular/http/src/http';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 53.3330600;
  lng: number = -6.2488900;

  myIcon: string = "http://ianmckie.com/bustop-json/js/you-icon.png";
  busIcon: string = "http://ianmckie.com/bustop-json/images/bus-icon.png";

  currentStopId: number;

  nearestMarkers: any[];
  busesServing: any[];

  // Modal Vars
  bodySection: string = '';
  titleSection: String = '';
  buttonSection: string = '';

  constructor(private dataservice:DataService) {}

  ngOnInit() {
    // Contact API to find nearest bus stops to your location
    this.dataservice.getNearStops(this.lat, this.lng).subscribe((response) => {
      this.nearestMarkers = response.Stops;2
    }); 
  }


  /*
   * When the main marker is picked up and dropped
   * 
   * @param $event 
   * 
   */
  
   dragEnd($event) {
      this.lat = $event.coords.lat;
      this.lng = $event.coords.lng

      this.dataservice.getNearStops(this.lat, this.lng).subscribe((response) => {
        this.nearestMarkers = response.Stops;
      }); 
  }


  /*
   * When a stop marker is clicked get the stopId
   * 
   * @param stopId (string) 
   * 
   */

  getStopInfo(stopId){

    // Contact the API to get the buses serving a stop
    this.dataservice.getBusesServing(stopId).subscribe((response) => {
      
      let body = '<ul>',
          routes = response.Routes;
      
      for(let x = 0;x<routes.length;x++){
        body += '<li><a onClick="this.getBusRoute()" class="bus-number" href="#">'+routes[x].BusNumber+'</a></li>'
      }
      
      this.bodySection = body+'</ul>';

      // Oen bootstrap modal
      $('.modal').modal();

    }); 
  }


  /*
   * Get all stops along a bus route
   * 
   * @param stopId (string) 
   * 
   */
  
  getBusRoute(){
    console.log('hello');
  }

}