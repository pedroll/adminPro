import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import {SharedModule} from "../shared/shared.module";


// Componentes
import {PagesComponent} from "./pages.component";
import {Graficas1Component} from "./graficas1/graficas1.component";
import {ProgresComponent} from "./progres/progres.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PagesRoutingModule} from './pages-routing.module';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgresComponent,
    Graficas1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    ProgresComponent,
    Graficas1Component
  ]
})
export class PagesModule { }
