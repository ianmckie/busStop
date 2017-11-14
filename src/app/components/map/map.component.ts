import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Jsonp } from '@angular/http/src/http';


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

  nearestMarkers: any[];

  constructor(private dataservice:DataService) {}

  ngOnInit() {
    this.dataservice.getNearStops().subscribe((response) => {
      this.nearestMarkers = response.Stops;
    }); 
  }

}
