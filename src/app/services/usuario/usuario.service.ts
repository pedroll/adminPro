import {Injectable} from '@angular/core';
import {Usuario} from '../../models/usuario.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient) {
  }

  loginGoogle(token) {

    // if (recordar) {
    //   localStorage.setItem('email', usuario.email);
    // } else {
    //   localStorage.removeItem('email');
    // }

    const url = environment.backendUrl + '/login/google';
    return this.http.post(url, {token})
      .pipe(
        map(
          (resp: any) => {
            this.guardarStorage(resp.id, resp.token, resp.usuario);
            // borramos email  del login local previo
            localStorage.removeItem('email');
            return true;
          }
        )
      );
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
