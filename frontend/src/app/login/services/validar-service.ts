import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Usuario } from '../../models/usuarioLogin-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ValidarService {

  private API = 'http://localhost:8080/api/usuarios';

  // ⚡ BehaviorSubject para controlar se está logado
  private logadoSubject = new BehaviorSubject<boolean>(this.isBrowser() && !!localStorage.getItem('usuarioLogado'));
  isLogado$ = this.logadoSubject.asObservable();

  constructor(private http: HttpClient) { }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  // Tenta logar e retorna true se deu certo
  login(email: string, senha: string): Observable<boolean> {
  return this.http.post<Usuario>(`${this.API}/login`, { email, senha }).pipe(
    map((usuario: Usuario) => {
      // Só aceita login se for CLIENTE
      if (usuario && usuario.tipo === 'CLIENTE' && this.isBrowser()) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        this.logadoSubject.next(true);
        return true;
      }
      return false;
    })
  );
}


  // Retorna o usuário logado, ou null se não tiver
  getUsuario(): Usuario | null {
    if (this.isBrowser()) {
      const usuario = localStorage.getItem('usuarioLogado');
      return usuario ? JSON.parse(usuario) : null;
    }
    return null;
  }

  // Verifica se o usuário está logado
  estaLogado(): boolean {
  const usuario = this.getUsuario();
  return !!usuario && usuario.tipo === 'CLIENTE';
}

  // Faz logout
  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('usuarioLogado');
      this.logadoSubject.next(false);
    }
  }
}

