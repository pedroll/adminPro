import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
// Modulos
import {PagesModule} from './pages/pages.module';
import {AuthModule} from './auth/auth.module';
import {ErrorsModule} from './errors/errors.module';

// Rutas
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
// componentes
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    ErrorsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
