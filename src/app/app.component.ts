import {Component} from '@angular/core';
import {SettingsService} from './services/settings.service';

// declaramos la funcion qque ya existe en el archivo importado en index.html. pero externo a Angular
declare function iniciar_plugins();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public settings: SettingsService) {
    // iniciamos la funcion que hemos creado con el script externo
    iniciar_plugins();
  }

  title = 'adminPro';
}
