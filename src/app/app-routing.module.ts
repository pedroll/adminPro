import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesRoutingModule} from './pages/pages-routing.module';

import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {PagenofoundComponent} from './errors/pagenofound/pagenofound.component';
import {AuthRoutingRoutingModule} from "./auth/auth-routing.module";

const routes: Routes = [


  {
    path: '**',
    component: PagenofoundComponent,
    data: {titulo: 'Pagina no encontrada', descripcion: 'Descripcion fascinante de Pagina no encontrada'}
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }),
    PagesRoutingModule,
    AuthRoutingRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
