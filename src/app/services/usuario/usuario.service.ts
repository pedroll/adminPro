import {Injectable} from '@angular/core';
import {Usuario} from '../../models/usuario.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient,
              public  router: Router
  ) {
    this.cargarStorage();
  }

  estaLogeado() {
    return (this.token.length >= 5) ? true : false;
  }

  loginGoogle(tokenGoogle) {

    // if (recordar) {
    //   localStorage.setItem('email', usuario.email);
    // } else {
    //   localStorage.removeItem('email');
    // }

    const url = environment.backendUrl + '/login/google';
    console.log('enviando tokenGoogle');
    return this.http.post(url, {token: tokenGoogle})
      .pipe(
        map(
          (resp: any) => {
            console.log('respuesta', resp);
            this.guardarStorage(resp.id, resp.token, resp.usuario);
            // borramos email  del login local previo
            localStorage.removeItem('email');
            return true;
          }
        )
      );
  }

  logout() {
    this.usuario = null;
    this.token = '';

    // localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  login(usuario: Usuario, recordar: boolean = false) {

    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = environment.backendUrl + '/login';
    return this.http.post(url, usuario)
      .pipe(
        map(
          (resp: any) => {
            this.guardarStorage(resp.id, resp.token, resp.usuario);
            return true;
          }
        )
      );
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  cargarStorage() {
    // todo: existe token, pero es valido?
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  crearUsuario(usuario: Usuario) {

    const url = environment.backendUrl + '/users';

    return this.http.post(url, {usuario})
      .pipe(
        map((resp: any) => {
            // Swal.fire({
            //            title: 'usuario creado',
            //            icon: 'success',
            //            html: usuario.email
            //          });

            return resp.usuario;
          }
        ));
  }

}
