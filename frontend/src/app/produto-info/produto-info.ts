import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../Area-Adm/produtos/services/produto-service';
import { Produto } from '../models/produto-model';
import { CardProdutoLoja } from '../loja/card-produto-loja/card-produto-loja';
import { CommonModule } from '@angular/common';
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { ProdutosRelacionados } from "../produtos-relacionados/produtos-relacionados";
import { ValidarService } from '../login/services/validar-service';
import { CarrinhoService } from '../Carrinho-compras/services/service-carrinho';
import { MatDialog } from '@angular/material/dialog';
import { Alerts } from '../Area-Adm/shared/components/alerts/alerts';

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
  produtosRelacionados: Produto[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private validarService: ValidarService,
    private carrinhoService: CarrinhoService,
    private dialog: MatDialog
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // evita caching
  }

  ngOnInit() {
    /*
    // Produto já vem do resolver
    this.produto = this.route.snapshot.data['produto'];
    this.loading = false;
    // ✅ Passa apenas quando o produto e o gênero estiverem prontos
  if (this.produto?.generoMusical?.nome) {
    this.categoriaProdutosRelacionados = this.produto.generoMusical.nome;
  }*/
 this.produto = this.route.snapshot.data['produto'];
  this.produtosRelacionados = this.route.snapshot.data['relacionados'];
  this.loading = false;
  }

  verProduto(prod: Produto) {
    this.router.navigate(['/produto-info', prod.id]);
  }

  // Função para adicionar ao carrinho
  adicionarAoCarrinho(produto: Produto) {
    const usuario = this.validarService.getUsuario();

    if (usuario) {
      this.carrinhoService.adicionarItem(Number(usuario.id), produto.id, 1)
        .subscribe({
          next: (response) => {
            console.log('Produto adicionado ao carrinho', response);

            // 🔥 Aqui abre o aviso de sucesso!
            this.dialog.open(Alerts, {
              data: 'Produto adicionado ao carrinho!',
              width: '300px'
            });
          },
          error: (error) => {
            console.error(error);

            // 🔥 Aviso de erro
            this.dialog.open(Alerts, {
              data: 'Erro ao adicionar ao carrinho.',
              width: '300px'
            });
          }
        });

    } else {
      this.router.navigate(['/login']);
    }
  }



}

