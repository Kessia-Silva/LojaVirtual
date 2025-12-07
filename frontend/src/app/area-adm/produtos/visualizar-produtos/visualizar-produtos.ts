import { Component } from '@angular/core';
import { Produto } from '../model/produto-model';
import { ProdutoService } from '../services/produto-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizar-produtos',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, CommonModule ],
  templateUrl: './visualizar-produtos.html',
  styleUrl: './visualizar-produtos.scss',
})
export class VisualizarProdutos {


    produtos: Produto[] = [];           // Todos os produtos
    produtosFiltrados: Produto[] = [];  // Produtos filtrados pela busca
    buscaProduto: string = '';          // Valor do input de busca
    produtoSelecionado: Produto | null = null; // Produto selecionado para confirmar remoção

    constructor(private produtoService: ProdutoService) { }

    ngOnInit(): void {
      this.produtoService.getProdutos().subscribe(produtos => {
        this.produtos = produtos;
        this.produtosFiltrados = produtos;
      });
    }

    // Filtra os produtos conforme o input
    filtrarProdutos(): void {
      const termo = this.buscaProduto.toLowerCase();
      this.produtosFiltrados = this.produtos.filter(p => p.nome.toLowerCase().includes(termo));
    }

}
