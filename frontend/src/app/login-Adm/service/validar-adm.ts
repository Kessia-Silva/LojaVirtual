import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Usuario } from '../../models/usuarioLogin-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ValidarAdm {
  private API = 'http://localhost:8080/api/usuarios';

  // ⚡ BehaviorSubject para controlar se está logado como admin
  private logadoAdminSubject = new BehaviorSubject<boolean>(this.isBrowser() && this.usuarioAdmin());
  isLogadoAdmin$ = this.logadoAdminSubject.asObservable();

  constructor(private http: HttpClient) {}

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  // Tenta logar e retorna true se o usuário for admin
  login(email: string, senha: string): Observable<boolean> {
  return this.http.post<Usuario>(`${this.API}/login`, { email, senha }).pipe(
    map((usuario: Usuario) => {
      if (!usuario) {
        throw new Error('Usuário não encontrado');
      }
      if (usuario.tipo !== 'ADMIN') {
        throw new Error('Usuário não é admin');
      }
      if (this.isBrowser()) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        this.logadoAdminSubject.next(true);
      }
      return true;
    })
  );
}

  // Retorna o usuário logado
  getUsuario(): Usuario | null {
    if (this.isBrowser()) {
      const usuario = localStorage.getItem('usuarioLogado');
      return usuario ? JSON.parse(usuario) : null;
    }
    return null;
  }

  // Verifica se está logado como admin
  estaLogado(): boolean {
    const usuario = this.getUsuario();
    return !!usuario && usuario.tipo === 'ADMIN';
  }

  // Faz logout
  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('usuarioLogado');
      this.logadoAdminSubject.next(false);
    }
  }

  // Checa se o usuário no localStorage é admin
  private usuarioAdmin(): boolean {
    const usuario = this.getUsuario();
    return !!usuario && usuario.tipo === 'ADMIN';
  }
}
