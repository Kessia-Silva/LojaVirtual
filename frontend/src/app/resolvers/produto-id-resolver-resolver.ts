import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ProdutoService } from '../Area-Adm/produtos/services/produto-service';
import { Produto } from '../models/produto-model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoResolver implements Resolve<Produto | null>{
   constructor(private produtoService: ProdutoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produto | null> {
    const id = Number(route.paramMap.get('id'));
    return this.produtoService.getProdutoById(id).pipe(
      catchError(err => {
        console.error("Erro no resolver:", err);
        return of(null); // garante que o observable nunca falhe
      })
    );
  }
}
