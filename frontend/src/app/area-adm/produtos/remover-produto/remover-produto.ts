import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProdutoService } from '../services/produto-service';
import { Produto } from '../model/produto-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-remover-produto',
  imports: [ MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatIconModule, AsyncPipe, NgFor, FormsModule, CommonModule ],
  templateUrl: './remover-produto.html',
  styleUrl: './remover-produto.scss',
})
export class RemoverProduto {

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

  // Abre modal de confirmação
  abrirConfirmacao(produto: Produto): void {
    this.produtoSelecionado = produto;
  }

  // Remove produto após confirmação
  removerProduto(): void {
    if (this.produtoSelecionado) {
      this.produtoService.deleteProduto(this.produtoSelecionado.id);
      // Atualiza a lista de produtos local
      this.produtos = this.produtos.filter(p => p.id !== this.produtoSelecionado!.id);
      this.filtrarProdutos(); // atualiza produtosFiltrados
      this.produtoSelecionado = null; // fecha modal
    }
}

/* Para o back

produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  buscaProduto: string = '';
  produtoSelecionado: Produto | null = null;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe(produtos => {
      this.produtos = produtos;
      this.produtosFiltrados = produtos;
    });
  }

  filtrarProdutos(): void {
    const termo = this.buscaProduto.toLowerCase();
    this.produtosFiltrados = this.produtos.filter(p => p.nome.toLowerCase().includes(termo));
  }

  abrirConfirmacao(produto: Produto): void {
    this.produtoSelecionado = produto;
  }

  removerProduto(): void {
    if (!this.produtoSelecionado) return;

    this.produtoService.deleteProduto(this.produtoSelecionado.id).subscribe({
      next: () => {
        // Atualiza lista local
        this.produtos = this.produtos.filter(p => p.id !== this.produtoSelecionado!.id);
        this.filtrarProdutos();
        this.produtoSelecionado = null;
      },
      error: (err) => {
        console.error('Erro ao remover produto', err);
      }
    });
  }*/

}
