import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  // utilizamos forchild por que no es el router principal
  // y lo importamos en el  y approuting
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingRoutingModule { }
