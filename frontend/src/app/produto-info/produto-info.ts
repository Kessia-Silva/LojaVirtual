import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../Area-Adm/produtos/services/produto-service';
import { Produto } from '../models/produto-model';
import { CardProdutoLoja } from '../loja/card-produto-loja/card-produto-loja';
import { CommonModule } from '@angular/common';
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { ProdutosRelacionados } from "../produtos-relacionados/produtos-relacionados";

@Component({
  selector: 'app-produto-info',
  imports: [CardProdutoLoja, CommonModule, MatProgressSpinner, ProdutosRelacionados],
  templateUrl: './produto-info.html',
  styleUrl: './produto-info.scss',
})
export class ProdutoInfo {
  produto!: Produto;
  loading: boolean = true;
  categoriaProdutosRelacionados: string = '';


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // evita caching
  }

  ngOnInit() {
    // Produto já vem do resolver
    this.produto = this.route.snapshot.data['produto'];
    this.loading = false;
    // ✅ Passa apenas quando o produto e o gênero estiverem prontos
  if (this.produto?.generoMusical?.nome) {
    this.categoriaProdutosRelacionados = this.produto.generoMusical.nome;
  }
  }

  verProduto(prod: Produto) {
    this.router.navigate(['/produto-info', prod.id]);
  }
}

