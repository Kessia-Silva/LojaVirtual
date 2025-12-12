import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProdutoService } from '../Area-Adm/produtos/services/produto-service';
import { Produto } from '../models/produto-model';
import { CardProdutoLoja } from '../loja/card-produto-loja/card-produto-loja';
import { CommonModule } from '@angular/common';
import { ProdutoStateService } from '../Services/produto-state.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { switchMap, Subscription } from 'rxjs';

@Component({
  selector: 'app-produto-info',
  imports: [CardProdutoLoja, CommonModule, MatProgressSpinner],
  templateUrl: './produto-info.html',
  styleUrls: ['./produto-info.scss'],
})
export class ProdutoInfo {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;

  produto: Produto | null = null;
  produtosRelacionados: Produto[] = [];
  loading: boolean = true;

  private relatedSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private produtoState: ProdutoStateService,
    private router: Router
  ) {
    // Força o Angular a não reutilizar a rota
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.carregarProduto();
  }

  carregarProduto() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const id = Number(params.get('id'));
          this.loading = true;
          this.produto = null;
          this.produtosRelacionados = [];
          return this.produtoService.getProdutoById(id);
        })
      )
      .subscribe({
        next: (prod) => {
          this.produto = prod;
          this.loading = false;

          if (prod?.generoMusical?.nome) {
            this.carregarRelacionados(prod);
          }
        },
        error: (err) => {
          console.error('Erro ao carregar produto:', err);
          this.loading = false;
        },
      });
  }

  carregarRelacionados(produto: Produto) {
    this.relatedSub?.unsubscribe();

    this.relatedSub = this.produtoService
      .getByCategoria(produto.generoMusical.nome)
      .subscribe({
        next: (prods) => {
          this.produtosRelacionados = prods.filter((p) => p.id !== produto.id);
        },
        error: (err) => {
          console.error('Erro ao carregar relacionados:', err);
          this.produtosRelacionados = [];
        },
      });
  }

  verProduto(prod: Produto) {
    // Navega para o mesmo caminho com outro ID e força recarregamento do componente
    this.router.navigate(['/produto-info', prod.id]);
  }

  scroll(direction: number) {
    if (this.carousel) {
      const width = this.carousel.nativeElement.offsetWidth;
      this.carousel.nativeElement.scrollBy({
        left: direction * (width / 2),
        behavior: 'smooth',
      });
    }
  }

  ngOnDestroy() {
    this.relatedSub?.unsubscribe();
  }
}


