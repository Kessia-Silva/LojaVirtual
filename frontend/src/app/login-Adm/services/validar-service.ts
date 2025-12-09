import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidarService {


  constructor() { }

  // Função para validar login
  validarLogin(email: string, senha: string): boolean {
    return true;
  }
}
