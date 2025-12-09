import { CardProdutoLoja } from './card-produto-loja/card-produto-loja';
import { ProdutoService } from './../Area-Adm/produtos/services/produto-service';
import { Component } from '@angular/core';
import { Produto } from '../models/produto-model';
import { CommonModule, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [MatIconModule, CommonModule,NgFor,CardProdutoLoja],
  templateUrl: './loja.html',
  styleUrl: './loja.scss',
})
export class Loja {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }


  ngOnInit(): void {
      this.produtoService.getProdutos().subscribe(produtos => {
        this.produtos = produtos;
        console.log(produtos);
      });
    }

}
