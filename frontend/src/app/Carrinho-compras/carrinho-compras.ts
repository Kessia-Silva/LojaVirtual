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

@Component({
  selector: 'carrinho-compras',
  standalone: true, // Adicionado para componentes Standalone
  imports: [NgFor, AsyncPipe, CurrencyPipe,RouterModule],
  templateUrl: './carrinho-compras.html',
  styleUrl: './carrinho-compras.scss',
})

export class CarrinhoCompras {
 carrinho!: Carrinho; // carrinho completo
  carregando = true;

  constructor(
    private carrinhoService: CarrinhoService,
    private authService: ValidarService
  ) {}

  ngOnInit(): void {
    this.carregarCarrinho();
  }

  carregarCarrinho() {
    const usuarioId = this.authService.getUsuario();

    this.carrinhoService.getCarrinho(Number(usuarioId?.id)).subscribe({
      next: (c) => {
        this.carrinho = c;
        this.carregando = false;
      },
      error: (err) => {
        console.log("Erro carregando carrinho:", err);
        this.carregando = false;
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
