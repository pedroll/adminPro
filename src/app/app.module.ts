import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Modulos
import {PagesModule} from "./pages/pages.module";

// Rutas
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

//componentes
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {PagenofoundComponent} from './shared/pagenofound/pagenofound.component';
import {HeaderComponent} from './shared/header/header.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {BreadcrumbComponent} from './shared/breadcrumb/breadcrumb.component';
import {RegisterComponent} from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenofoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
