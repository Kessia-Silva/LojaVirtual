import { ResolveFn } from '@angular/router';
import { ProdutoService } from '../Area-Adm/produtos/services/produto-service';
import { inject } from '@angular/core';
import { Produto } from '../models/produto-model';
import { take } from 'rxjs';

export const produtoResolver: ResolveFn<Produto[]> = (route, state) => {
  const produtoService = inject(ProdutoService); // inject permite acessar serviços
  return produtoService.getProdutos().pipe(take(1)); // retorna Observable<Produto[]>
};
