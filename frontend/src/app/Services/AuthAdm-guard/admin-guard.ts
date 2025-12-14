import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { ValidarAdm } from '../../login-Adm/service/validar-adm';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  constructor(
    private validarAdmin: ValidarAdm,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // Se estiver logado como admin, libera a rota
    if (this.validarAdmin.estaLogado()) {
      return true;
    }

    // Se não for admin ou não estiver logado, redireciona para login
    return this.router.createUrlTree(['/loginAdm']);
  }
}
