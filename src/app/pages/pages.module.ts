import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
// Modulos
import {SharedModule} from '../shared/shared.module';
// rutas
import {PagesRoutingModule} from './pages-routing.module';
// Componentes
import {PagesComponent} from './pages.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {ProgresComponent} from './progres/progres.component';
import {DashboardComponent} from './dashboard/dashboard.component';
// temporal
import {IncrementadorComponent} from '../componentes/incrementador/incrementador.component';
// ng2-charts
import {ChartsModule} from 'ng2-charts';
import {DonutchartComponent} from '../componentes/donutchart/donutchart.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgresComponent,
    Graficas1Component,
    IncrementadorComponent,
    DonutchartComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgresComponent,
    Graficas1Component
  ]
})
export class PagesModule {
}
