import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ProgresComponent} from './pages/progres/progres.component';
import {Graficas1Component} from './pages/graficas1/graficas1.component';
import {PagenofoundComponent} from './shared/pagenofound/pagenofound.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: LoginComponent},
  {path: 'progress', component: ProgresComponent},
  {path: 'graficas1', component: Graficas1Component},
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: '**', component: PagenofoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
