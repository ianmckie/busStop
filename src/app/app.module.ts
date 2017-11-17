import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';

import { DataService } from './services/data.service';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8UFrlMzwiTlJdTrk_-7PfPsYAySDzB28'
    })
  ],
  providers: [
    DataService
  ],
  declarations: [ AppComponent, MapComponent, ModalComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}