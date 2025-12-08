// 1. Importe OnInit do core
import { Component, OnInit } from '@angular/core';
// 2. Ajuste o nome da classe para CarrinhoService (se for o nome correto)
import { CarrinhoService } from './services/service-carrinho';
import { Produto } from './../home/services/produtos';
import { Observable } from 'rxjs';
import { AsyncPipe, CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'carrinho-compras',
  standalone: true, // Adicionado para componentes Standalone
  imports: [NgFor, AsyncPipe, CurrencyPipe],
  templateUrl: './carrinho-compras.html',
  styleUrl: './carrinho-compras.scss',
})

export class CarrinhoCompras implements OnInit {
carrinho$!: Observable<Produto[]>;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carrinho$ = this.carrinhoService.carrinho$;
  }

  // --- Funções Auxiliares

  calcularTotalItens(produtos: Produto[]): number {
    return produtos.length;
  }

  calcularSubtotal(produtos: Produto[]): number {
    return produtos.reduce((total, item) => total + item.preco, 0);
  }

}
