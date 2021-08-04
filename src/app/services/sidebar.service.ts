import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // creamos un objeto con la estructura del menu
  menu: Menu = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/dashboard'},
        {titulo: 'Progressbar', url: '/dashboard/progress'},
        {titulo: 'Graficas', url: '/dashboard/graficas1'},
        {titulo: 'Promesas', url: '/dashboard/promesas'},
        {titulo: 'Rxjs', url: '/dashboard/rxjs'}
      ]
    }
  ];

  constructor() {
  }
}


// al definir un array en el interface utilizamos [index: number]:{ ... }
interface Menu {
  [index: number]: {
    titulo: string,
    icono: string,
    submenu: {
      [index: number]: { titulo: string, url: string }
    }
  }
}
