import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
// Modulos
import {SharedModule} from '../shared/shared.module';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {ComponentsModule} from "../components/components.module";
// rutas
import {PagesRoutingModule} from './pages-routing.module';
// Componentes
import {PagesComponent} from './pages.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {ProgresComponent} from './progres/progres.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PromesasComponent} from './promesas/promesas.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
// temporal
// ng2-charts

/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    javascript: () => import('highlight.js/lib/languages/javascript'),
    scss: () => import('highlight.js/lib/languages/scss'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgresComponent,
    Graficas1Component,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ComponentsModule,
    HighlightModule
  ],
  exports: [],
  providers: [
    // para mostrar codigo
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],

})

export class PagesModule {
}
