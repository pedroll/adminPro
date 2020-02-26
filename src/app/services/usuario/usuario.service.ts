import {Injectable} from '@angular/core';
import {Usuario} from '../../models/usuario.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) {
  }

  crearUsuario(usuario: Usuario) {
    let url = environment.backendUrl + '/users';

    return this.http.post(url, usuario);
  }

}
