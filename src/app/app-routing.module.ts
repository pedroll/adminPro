import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagesRoutingModule} from './pages/pages-routing.module';
import {AuthRoutingRoutingModule} from "./auth/auth-routing.module";

import {PagenofoundComponent} from './errors/pagenofound/pagenofound.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {
    // path: dashboard pages-routing
    // path: login auth-routing
    // path: register auth-routing
    path: '**',
    component: PagenofoundComponent,
    data: {titulo: 'Pagina no encontrada', descripcion: 'Descripcion fascinante de Pagina no encontrada'}
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: 'legacy'}),
    PagesRoutingModule,
    AuthRoutingRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
