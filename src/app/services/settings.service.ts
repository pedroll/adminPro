import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    tema: 'default',
    temaUrl: 'assets/css/colors/default.css'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    console.log('Guardado en localstorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    this.aplicartema();
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      console.log('Leyendo de localstorage');
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    } else {
      console.log('Utilizando ajustes por defecto');
    }
    this.aplicartema();

  }

  aplicartema() {

    const url = `assets/css/colors/${this.ajustes.tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);

  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
