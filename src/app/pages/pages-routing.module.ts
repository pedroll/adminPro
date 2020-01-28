import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgresComponent} from "./progres/progres.component";
import {Graficas1Component} from "./graficas1/graficas1.component";

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [

      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgresComponent},
      {path: 'graficas1', component: Graficas1Component},
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
