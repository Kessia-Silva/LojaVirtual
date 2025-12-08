import { Component } from '@angular/core';
import { Produto } from '../model/produto-model';
import { ProdutoService } from '../services/produto-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarInternoAdm } from "../../../navbar/navbar-interno-adm/navbar-interno-adm";
import { GeneroMusicalService } from '../../genero-musical/services/genero-musical-service';
import { GeneroMusical } from '../../genero-musical/model/genero-musical';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-editar-produto',
  imports: [MatFormFieldModule, FormsModule, MatButtonModule,
    CommonModule, MatSelectModule, MatInputModule, MatIconModule, NavbarInternoAdm,],
  templateUrl: './editar-produto.html',
  styleUrl: './editar-produto.scss',
})
export class EditarProduto {

   produtos: Produto[] = [];           // Todos os produtos
    produtosFiltrados: Produto[] = [];  // Produtos filtrados pela busca
    buscaProduto: string = '';          // Valor do input de busca
    produtoSelecionado: Produto | null = null; // Produto selecionado para confirmar remoção
    generosMusicais: GeneroMusical[] = [];  // Lista de gêneros do service

    constructor(
    private produtoService: ProdutoService,
    private generoService: GeneroMusicalService
  ) {}

    ngOnInit(): void {
      // Carrega produtos
      this.produtoService.getProdutos().subscribe(produtos => {
        this.produtos = produtos;
        this.produtosFiltrados = produtos;
      });

      // Carrega gêneros musicais

      this.generoService.getAll().subscribe(generos => {
  this.generosMusicais = generos;
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
this.produtoSelecionado.nome = this.capitalizeFirstLetter(this.produtoSelecionado.nome);
  }
}

// Função para inicial maiúscula
capitalizeFirstLetter(value: string): string {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
}



carregarGeneros() {
  this.generoService.getAll().subscribe({
    next: (lista) => this.generosMusicais = lista,
    error: (err) => console.error('Erro ao carregar gêneros', err)
  });
}

/*

trocar com backend:
 getGeneros(): Observable<GeneroMusical[]> {
    return this.httpCliente.get<GeneroMusical[]>(this.API);
  } */


}
