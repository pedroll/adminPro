import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// Modulos
import {PagesModule} from './pages/pages.module';
// Rutas
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
// componentes
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register.component';
// temporal
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
