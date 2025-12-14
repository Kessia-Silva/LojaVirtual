import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ProdutoService } from '../Area-Adm/produtos/services/produto-service';
import { Produto } from '../models/produto-model';
import { map, of, switchMap } from 'rxjs';

export const produtosRelacionadosResolver: ResolveFn<Produto[]> = (route) => {
const produtoService = inject(ProdutoService);

  const id = Number(route.paramMap.get('id'));

  if (!id) return of([]);

  // 1️⃣ Busca o produto
  return produtoService.getProdutoById(id).pipe(
    switchMap(produto => {
      if (!produto?.generoMusical?.nome) {
        return of([]);
      }

      // 2️⃣ Busca relacionados pela categoria
      return produtoService.getByCategoria(produto.generoMusical.nome).pipe(
        map(produtos =>
          produtos.filter(p => p.id !== produto.id)
        )
      );
    })
  );
};

