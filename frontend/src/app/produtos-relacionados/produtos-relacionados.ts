import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Produto } from '../models/produto-model';
import { CardProdutoLoja } from "../loja/card-produto-loja/card-produto-loja";
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../Area-Adm/produtos/services/produto-service';
import { MatProgressSpinner } from "@angular/material/progress-spinner";


@Component({
  selector: 'app-produtos-relacionados',
  imports: [CardProdutoLoja, CommonModule, MatProgressSpinner],
  templateUrl: './produtos-relacionados.html',
  styleUrl: './produtos-relacionados.scss',
})
export class ProdutosRelacionados  implements OnChanges   {

@Input() produtos: Produto[] = [];

  loading = true;

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
  if (changes['produtos'] && this.produtos) {

    // 🔒 filtra apenas produtos ativos
    this.produtos = this.produtos.filter(
      (p: Produto) => p.ativo
    );

    this.loading = false;
  }
}

  verProduto(prod: Produto) {
    this.router.navigate(['/produto-info', prod.id]);
  }

  scroll(direction: number) {
    const carousel = document.querySelector('.produtos-lista');
    if (carousel) {
      const width = carousel.clientWidth;
      carousel.scrollBy({ left: direction * width / 2, behavior: 'smooth' });
    }
  }
}
