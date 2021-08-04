import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgresComponent} from './progres/progres.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromesasComponent} from './promesas/promesas.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import {LoginGuard} from '../services/guards/login.guard';
import {PagenofoundComponent} from "../errors/pagenofound/pagenofound.component";

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [

      {
        path: 'dashboard', component: DashboardComponent,
        data: {titulo: 'Dashboard', descripcion: 'Descripcion fascinante de Dashboard'}
      },
      {
        path: 'progress', component: ProgresComponent,
        data: {titulo: 'Progress', descripcion: 'Descripcion fascinante de Progress'}
      },
      {
        path: 'graficas1', component: Graficas1Component,
        data: {titulo: 'Graficas', descripcion: 'Descripcion fascinante de Graficas'}
      },
      {
        path: 'promesas', component: PromesasComponent,
        data: {titulo: 'Promesas', descripcion: 'Descripcion fascinante de Promesas'}
      },
      {
        path: 'rxjs', component: RxjsComponent,
        data: {titulo: 'Rxjs', descripcion: 'Descripcion fascinante de Rxjs'}
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: {titulo: 'Ajustes de cuenta', descripcion: 'Descripcion fascinante de Dashboard'}
      },
      {path: '', pathMatch: 'full', redirectTo: '/dashboard'}
    ]
  }
];

@NgModule({
  declarations: [],
  // utilizamos forchild por que no es el router principal
  // y lo importamos en el pagesmodule y approuting
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
