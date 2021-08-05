import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {ChartsModule, Colors} from 'ng2-charts';

import {IncrementadorComponent} from "./incrementador/incrementador.component";
import {DonutchartComponent} from "./donutchart/donutchart.component";



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonutchartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule],
  exports:[
    IncrementadorComponent,
    DonutchartComponent,
  ]
})
export class ComponentsModule { }
