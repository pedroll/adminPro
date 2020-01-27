import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgresComponent} from "./progres/progres.component";
import {Graficas1Component} from "./graficas1/graficas1.component";
import {PagesComponent} from "./pages.component";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    DashboardComponent,
    ProgresComponent,
    Graficas1Component,
    PagesComponent,

  ],
  exports: [
    DashboardComponent,
    ProgresComponent,
    Graficas1Component,
    PagesComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
