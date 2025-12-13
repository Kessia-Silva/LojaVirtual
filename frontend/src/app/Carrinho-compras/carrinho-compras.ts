// 1. Importe OnInit do core
import { Component, OnInit } from '@angular/core';
// 2. Ajuste o nome da classe para CarrinhoService (se for o nome correto)
import { CarrinhoService } from './services/service-carrinho';
import { Observable } from 'rxjs';
import { AsyncPipe, CurrencyPipe, NgFor } from '@angular/common';
import { Produto } from '../models/produto-model';
import { ProdutoService } from '../Area-Adm/produtos/services/produto-service';
import { AuthGuard } from '../Services/auth-guard';
import { ValidarService } from '../login-Adm/services/validar-service';
import { Carrinho, ItemCarrinho } from '../models/carrinho';
import { RouterModule } from '@angular/router';
import { MatProgressSpinner, MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: 'carrinho-compras',
  standalone: true, // Adicionado para componentes Standalone
  imports: [NgFor, AsyncPipe, CurrencyPipe, RouterModule, MatProgressSpinner,MatProgressSpinnerModule  ],
  templateUrl: './carrinho-compras.html',
  styleUrl: './carrinho-compras.scss',
})

export class CarrinhoCompras implements OnInit{
  loading = true;  // precisa iniciar como true para ver o spinner
 carrinho!: Carrinho; // carrinho completo
  carregando = true;

  constructor(
    private carrinhoService: CarrinhoService,
    private authService: ValidarService
  ) {}

  ngOnInit(): void {
// Simula 5 segundos de carregamento
    this.carregarCarrinho();
  }

  carregarCarrinho() {
    this.loading = true;
    const usuarioId = this.authService.getUsuario();

    this.carrinhoService.getCarrinho(Number(usuarioId?.id)).subscribe({
      next: (c) => {
        this.carrinho = c;
        this.carregando = false;
        this.loading = false;
      },
      error: (err) => {
        console.log("Erro carregando carrinho:", err);
        this.carregando = false;
        this.loading = false;
      }
    });
  }

  aumentar(item: ItemCarrinho) {
  const usuario = this.authService.getUsuario();
  if (!usuario) return;

  this.carrinhoService.aumentar(Number(usuario.id), item).subscribe(() => {
    this.carregarCarrinho();
  });
}

diminuir(item: ItemCarrinho) {
  const usuario = this.authService.getUsuario();
  if (!usuario) return;

  this.carrinhoService.diminuir(Number(usuario.id), item).subscribe(() => {
    this.carregarCarrinho();
  });
}

remover(item: ItemCarrinho) {
  const usuario = this.authService.getUsuario();
  if (!usuario) return;

  this.carrinhoService.removerItem(Number(usuario.id), item.produto.id).subscribe(() => {
    this.carregarCarrinho();
  });
}



}
