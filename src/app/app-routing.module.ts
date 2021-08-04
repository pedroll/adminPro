import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './auth/login.component';
import {RegisterComponent} from './auth/register.component';
import {PagenofoundComponent} from './errors/pagenofound/pagenofound.component';

const routes: Routes = [

  // nos llevamos esto su propio approuting en el modulo pages
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // {
  //   path: '**',
  //   component: PagenofoundComponent,
  //   data: {titulo: 'Pagina no encontrada', descripcion: 'Descripcion fascinante de Pagina no encontrada'}
  // },
   {path: '**', component: PagenofoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
