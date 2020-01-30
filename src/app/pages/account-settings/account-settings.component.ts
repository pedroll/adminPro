import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  //
  constructor(@Inject(DOCUMENT) private _document) {
  }

  ngOnInit() {
  }

  cambiarColor(tema: string, link: HTMLAnchorElement) {

    this.aplicarCheck(link);
    console.log(tema);
    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
  }


  private aplicarCheck(link: HTMLAnchorElement) {
    //const activos: HTMLCollection = document.getElementsByClassName('working');
    const selectores: HTMLCollection = document.getElementsByClassName('working');
    // document.getElementsByClassName(link.className).add

    for (let ref of selectores) {

      console.log(ref);
      ref.classList.remove('working');
    }


    link.classList.add('working');
  }
}
