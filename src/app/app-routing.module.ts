import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from "./login/register.component";
import {PagenofoundComponent} from "./shared/pagenofound/pagenofound.component";

const routes: Routes = [

  // nos llevamos esto su propio approuting en el modulo pages
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PagenofoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
