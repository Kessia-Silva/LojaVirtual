import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Usuario } from '../../../models/usuarioLogin-model';
@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  private API = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) { }

  // Retorna o usuário logado (do localStorage)
  getUsuarioLogado(): Usuario | null {
    const usuario = localStorage.getItem('usuarioLogado');
    return usuario ? JSON.parse(usuario) : null;
  }

  // Atualiza dados do usuário
  atualizarConta(usuarioAtualizado: Partial<Usuario>): Observable<Usuario> {
    const usuarioLogado = this.getUsuarioLogado();
    if(!usuarioLogado) throw new Error("Usuário não logado");

    return this.http.put<Usuario>(`${this.API}/${usuarioLogado.id}`, usuarioAtualizado).pipe(
      map((usuario: Usuario) => {
        // Atualiza localStorage
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        return usuario;
      })
    );
  }
}
