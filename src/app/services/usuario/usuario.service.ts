import {Injectable} from '@angular/core';
import {Usuario} from '../../models/usuario.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) {
  }

  login(usuario: Usuario, recordar: boolean = false) {
    const url = environment.backendUrl + '/login';
    return this.http.post(url, usuario)
      .pipe(
        map(
          (resp: any) => {
            localStorage.setItem('id', resp.id);
            localStorage.setItem('token', resp.token);
            localStorage.setItem('usuario', JSON.stringify(resp.usuario));

            return true;
          }
        )
      );
  }

  crearUsuario(usuario: Usuario) {

    const url = environment.backendUrl + '/users';

    return this.http.post(url, usuario)
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
