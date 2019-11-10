import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PagesComponent} from "./pages.component";

import {Graficas1Component} from "./graficas1/graficas1.component";
import {ProgresComponent} from "./progres/progres.component";
import {DashboardComponent} from "./dashboard/dashboard.component";



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgresComponent,
    Graficas1Component
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    ProgresComponent,
    Graficas1Component
  ]
})
export class PagesModule { }
