import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../Area-Adm/produtos/services/produto-service';
import { Produto } from '../models/produto-model';
import { CardProdutoLoja } from '../loja/card-produto-loja/card-produto-loja';
import { CommonModule } from '@angular/common';
import { MatProgressSpinner } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-produto-info',
  imports: [CardProdutoLoja, CommonModule, MatProgressSpinner],
  templateUrl: './produto-info.html',
  styleUrl: './produto-info.scss',
})
export class ProdutoInfo {
   @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;

  produto!: Produto;
  produtosRelacionados: Produto[] = [];
  loading: boolean = true;
  constructor(
    private route: ActivatedRoute,        // Para pegar o id na URL
    private produtoService: ProdutoService, // Serviço para buscar os dados
  ) {}

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const produtoId = Number(params.get('id'));

    // 1️⃣ Buscar produto atual
    this.produtoService.getProdutoById(produtoId).subscribe(prod => {
      if (prod) {
        this.produto = prod;
        this.loading = false;

        // 2️⃣ Buscar produtos relacionados pelo mesmo gênero
        this.produtoService.getByCategoria(String(this.produto.generoMusical.nome))
          .subscribe(produtos => {
            this.produtosRelacionados = produtos.filter(p => p.id !== this.produto.id);
          });
      }
    });
  });
}


  scroll(direction: number) {
    if (this.carousel) {
      const width = this.carousel.nativeElement.offsetWidth;
      this.carousel.nativeElement.scrollBy({ left: direction * width / 2, behavior: 'smooth' });
    }
  }



}
