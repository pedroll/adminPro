import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgresComponent} from './progres/progres.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromesasComponent} from './promesas/promesas.component';
import {RxjsComponent} from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [

      {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
      {path: 'progress', component: ProgresComponent, data: {titulo: 'Progress'}},
      {path: 'graficas1', component: Graficas1Component, data: {titulo: 'Graficas'}},
      {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
      {path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'}},
      {path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes de cuenta'}},
      {path: '', pathMatch: 'full', redirectTo: '/dashboard'},

    ]
  }
];

@NgModule({
  declarations: [],
  // utilizamos forchild por que no es el router principal
  // y lo importamos en el pagesmodule
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
