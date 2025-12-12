import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../../models/usuarioLogin-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ValidarService {


  private API = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) { }

  // Tenta logar e retorna true se deu certo
  login(email: string, senha: string): Observable<boolean> {
    return this.http.post<Usuario>(`${this.API}/login`, { email, senha }).pipe(
      map((usuario: Usuario)  => {
        if (usuario) {
          // Guarda o usuário no localStorage
          localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
          return true;
        } else {
          return false;
        }
      })
    );
  }

  // Retorna o usuário logado, ou null se não tiver
  getUsuario(): Usuario | null {
    const usuario = localStorage.getItem('usuarioLogado');
    return usuario ? JSON.parse(usuario) : null;
  }

  // Faz logout
  logout(): void {
    localStorage.removeItem('usuarioLogado');
  }
}
