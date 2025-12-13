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



  @Input() categoria: string = '';  // categoria agora pode mudar dinamicamente
  produtos: Produto[] = [];
  loading: boolean = true;

  constructor(private produtoService: ProdutoService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Sempre que a categoria mudar e não estiver vazia
    if (changes['categoria'] && this.categoria) {
      this.loading = true;
      this.produtoService.getByCategoria(this.categoria).subscribe(
        (produtos) => {
          this.produtos = produtos;
          this.loading = false;
        },
        (err) => {
          console.error('Erro ao carregar produtos relacionados:', err);
          this.produtos = [];
          this.loading = false;
        }
      );
    }
  }

  verProduto(prod: Produto) {
    // Navega via router para evitar refresh total
    window.location.href = `/produto-info/${prod.id}`;
  }

   // Função para rolar o carrossel para esquerda e direita
  scroll(direction: number) {
    const carousel = document.querySelector('.produtos-lista');
    if (carousel) {
      const width = carousel.clientWidth; // largura do carrossel
      carousel.scrollBy({ left: direction * width / 2, behavior: 'smooth' });
    }
}
}


