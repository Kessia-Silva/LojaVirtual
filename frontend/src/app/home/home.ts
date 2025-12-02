import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProdutosService, Produto } from './services/produtos';
import { CommonModule } from '@angular/common';
import { ProdutoCard } from '../produto-card/produto-card';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, CommonModule, ProdutoCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getProdutosMaisVendidos();
  }
}
