import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidarService {
  // Lista de admins estática
  private admins = [
    { email: 'teste@exemplo.com', senha: '12345678' },
    { email: 'admin2@exemplo.com', senha: 'senhaSegura' }
  ];

  constructor() { }

  // Função para validar login
  validarLogin(email: string, senha: string): boolean {
    return this.admins.some(admin => admin.email === email && admin.senha === senha);
  }
}
