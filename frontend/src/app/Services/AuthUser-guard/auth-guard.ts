import { ValidarService } from '../../login/services/validar-service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{
  constructor(
    private ValidarService: ValidarService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.ValidarService.estaLogado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
