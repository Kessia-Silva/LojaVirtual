import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router } from '@angular/router';
import { ProdutoService } from '../../Area-Adm/produtos/services/produto-service';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoAtivoGuard implements CanActivate {

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {

    const id = Number(route.paramMap.get('id'));

    if (!id) {
      this.router.navigate(['/']);
      return of(false);
    }

    return this.produtoService.getProdutoById(id).pipe(
      map(produto => {
        if (produto.ativo) {
          return true;
        }

        // 🚫 produto inativo
        this.router.navigate(['/']);
        return false;
      }),
      catchError(() => {
        // 🚫 produto não existe
        this.router.navigate(['/']);
        return of(false);
      })
    );
  }
}
