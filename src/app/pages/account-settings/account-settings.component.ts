import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  //
  constructor(public ajustesservice: SettingsService) {

  }

  ngOnInit() {
    const itemaActivo: HTMLCollection = document.getElementsByClassName(this.ajustesservice.ajustes.tema + '-theme');
    itemaActivo[0].classList.add('working');
  }

  cambiarColor(tema: string, link: HTMLAnchorElement) {

    // utilizamos servicio y guardamos en localstorage
    this.ajustesservice.ajustes.tema = tema;
    this.ajustesservice.guardarAjustes();

    this.aplicarCheck(link);
    console.log(tema);
  }


  private aplicarCheck(link: HTMLAnchorElement) {
    //const activos: HTMLCollection = document.getElementsByClassName('working');
    const selectores: HTMLCollection = document.getElementsByClassName('working');
    // document.getElementsByClassName(link.className).add

    // @ts-ignore
    for (let ref of selectores) {

      console.log(ref);
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }
}
