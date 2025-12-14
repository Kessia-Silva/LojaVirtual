import { Injectable } from '@angular/core';

import {catchError, delay, first, tap, Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http"
import { TipoUsuario, Usuario } from '../../models/usuarioLogin-model';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private API = 'http://localhost:8080/api/usuarios/cadastro';

  constructor(private http: HttpClient) {}

  cadastrar(dados: { nome: string; sobrenome: string; email: string; senha: string; endereco: string }): Observable<Usuario> {
  const usuario: Usuario = {
    ...dados,
    tipo: TipoUsuario.CLIENTE, // força o tipo
    id: '' // back gera o ID
  };

  return this.http.post<Usuario>(this.API, usuario).pipe(first());
}


}
