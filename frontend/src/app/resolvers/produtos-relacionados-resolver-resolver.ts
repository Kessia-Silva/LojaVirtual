import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ProdutoService } from '../Area-Adm/produtos/services/produto-service';
import { Produto } from '../models/produto-model';
import { map } from 'rxjs';

export const produtosRelacionadosResolver: ResolveFn<Produto[]> = (route) => {
  const produtoService = inject(ProdutoService);

  const categoria = route.paramMap.get('categoria');
  const produtoId = Number(route.paramMap.get('produtoId')); // id do produto atual

  if (!categoria) return [];

  return produtoService.getByCategoria(categoria).pipe(
    map(prods => prods.filter(p => p.id !== produtoId)) // filtra o produto atual
  );
};
