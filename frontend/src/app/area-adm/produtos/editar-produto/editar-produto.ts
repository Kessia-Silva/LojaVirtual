import { Component } from '@angular/core';
import { ProdutoService } from '../services/produto-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarInternoAdm } from "../../../navbar/navbar-interno-adm/navbar-interno-adm";
import { GeneroMusicalService } from '../../genero-musical/services/genero-musical-service';
import { MatSelectModule } from '@angular/material/select';
import { Produto } from '../../../models/produto-model';
import { GeneroMusical } from '../../../models/generoMusical-models';
import { MatProgressSpinner } from "@angular/material/progress-spinner";
@Component({
  selector: 'app-editar-produto',
  imports: [MatFormFieldModule, FormsModule, MatButtonModule,
    CommonModule, MatSelectModule, MatInputModule, MatIconModule, NavbarInternoAdm, MatProgressSpinner],
  templateUrl: './editar-produto.html',
  styleUrl: './editar-produto.scss',
})
export class EditarProduto {

   produtos: Produto[] = [];           // Todos os produtos
    produtosFiltrados: Produto[] = [];  // Produtos filtrados pela busca
    buscaProduto: string = '';          // Valor do input de busca
    produtoSelecionado: Produto | null = null; // Produto selecionado para confirmar remoção
    generosMusicais: GeneroMusical[] = [];  // Lista de gêneros do service
    loadingProdutos = true;
    loadingSalvar = false;


    constructor(
    private produtoService: ProdutoService,
    private generoService: GeneroMusicalService
  ) {}

    ngOnInit(): void {

      // Carrega produtos
       this.loadingProdutos = true;
      this.produtoService.getProdutos().subscribe(produtos => {
         console.log('Produtos recebidos:', produtos);
        this.produtos = produtos;
        this.produtosFiltrados = produtos;
        this.loadingProdutos = false;
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
    abrirConfirmacao(produto: Produto) {
  // Cria uma cópia independente para edição
  this.produtoSelecionado = { ...produto };
}




 EditarProduto(): void {
  if (!this.produtoSelecionado) return;

  // Validação de campos obrigatórios
  if (
    !this.produtoSelecionado.nome?.trim() ||
    !this.produtoSelecionado.generoMusical?.id ||
    this.produtoSelecionado.preco === null ||
    this.produtoSelecionado.estoque === null
  ) {
    alert('Preencha todos os campos obrigatórios antes de salvar.');
    return; // sai sem salvar
  }

  // Aplica capitalize
  this.produtoSelecionado.nome = this.capitalizeFirstLetter(this.produtoSelecionado.nome);


  // Atualiza via serviço
  this.produtoService.updateProduto(this.produtoSelecionado);
   this.loadingSalvar = false;

  // Atualiza lista filtrada
  this.filtrarProdutos();

  // Fecha modal
  this.produtoSelecionado = null;
}

  cancelarEdicao() {
  this.produtoSelecionado = null; // fecha o modal
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
