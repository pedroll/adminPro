import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginSkiptestComponent} from './login-skiptest/login-skiptest.component';
import {LoginComponent} from './login/login.component';
import {PagenofoundComponent} from './shared/pagenofound/pagenofound.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ProgresComponent} from './pages/progres/progres.component';
import {Graficas1Component} from './pages/graficas1/graficas1.component';
import {HeaderComponent} from './shared/header/header.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {BreadcrumbComponent} from './shared/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSkiptestComponent,
    LoginComponent,
    PagenofoundComponent,
    DashboardComponent,
    ProgresComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
