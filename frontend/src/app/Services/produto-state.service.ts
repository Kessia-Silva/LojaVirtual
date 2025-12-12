import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../models/produto-model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoStateService {
  // BehaviorSubject armazena o produto atual e emite para quem estiver inscrito
  private produtoSubject = new BehaviorSubject<Produto | null>(null);

  // Observable público que os componentes podem assinar
  produto$ = this.produtoSubject.asObservable();

  // Função para atualizar o produto
  setProduto(produto: Produto) {
    this.produtoSubject.next(produto);
  }

}
