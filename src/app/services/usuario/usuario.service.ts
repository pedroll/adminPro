import {Injectable} from '@angular/core';
import {Usuario} from '../../models/usuario.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) {
  }

  crearUsuario(usuario: Usuario) {
    let url = environment.backendUrl + '/users';

    return this.http.post(url, usuario)
      .pipe(
        map((resp: any) => {
            Swal.fire('usuario creado', usuario.email, 'success');
            return resp.usuario;
          }
        ));
  }

}
