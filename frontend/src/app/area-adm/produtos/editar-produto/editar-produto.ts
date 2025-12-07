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
  selector: 'app-editar-produto',
  imports: [ MatFormFieldModule, FormsModule, MatButtonModule,
    CommonModule,  MatInputModule, MatIconModule ],
  templateUrl: './editar-produto.html',
  styleUrl: './editar-produto.scss',
})
export class EditarProduto {

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



    EditarProduto(): void {
  if (this.produtoSelecionado) {
    this.produtoService.updateProduto(this.produtoSelecionado); // atualiza a lista local
    this.filtrarProdutos(); // atualiza produtosFiltrados
    this.produtoSelecionado = null; // fecha modal
  }
}

}
