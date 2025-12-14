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
import { ActivatedRoute } from '@angular/router';
import { Alerts } from '../../../shared/alerts/alerts';
import { MatDialog } from '@angular/material/dialog';
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
    modal = false;


    constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private generoService: GeneroMusicalService,
    private dialog: MatDialog 
  ) {}

    ngOnInit(): void {

      // Carrega produtos

      this.route.data.subscribe(({ produtos }) => {
      console.log('Produtos vindos do resolver:', produtos);
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


abrirConfirmacao(produto: Produto) {
  this.produtoSelecionado = { ...produto };

  // 🔥 sincroniza o gênero pelo ID
  const generoEncontrado = this.generosMusicais.find(
    g => g.id === produto.generoMusical?.id
  );

  if (generoEncontrado) {
    this.produtoSelecionado.generoMusical = generoEncontrado;
  }

  this.modal = true;
}





EditarProduto(): void {
  if (!this.produtoSelecionado) return;

  // Validação de campos obrigatórios
  if (
    !this.produtoSelecionado.nome?.trim() ||
    !this.produtoSelecionado.generoMusical ||
    !this.produtoSelecionado.generoMusical?.id ||
    this.produtoSelecionado.preco === null ||
    this.produtoSelecionado.estoque === null
  ) {
    this.dialog.open(Alerts, {
      data: 'Preencha todos os campos obrigatórios antes de salvar.'
    });
    return;
  }

  // Formata nome
  this.produtoSelecionado.nome =
    this.capitalizeFirstLetter(this.produtoSelecionado.nome);

  // Atualiza produto
  this.produtoService.updateProduto(this.produtoSelecionado).subscribe({
    next: () => {

      const dialogRef = this.dialog.open(Alerts, {
        data: 'Produto atualizado com sucesso!'
      });

      dialogRef.afterClosed().subscribe(() => {

        // Atualiza lista
        this.filtrarProdutos();

        // Limpa seleção
        this.produtoSelecionado = null;
      });
    },

    error: (err) => {
      let mensagem = 'Erro ao atualizar produto. Tente novamente.';

      if (err.status === 0) {
        mensagem = 'Servidor fora do ar. Tente mais tarde.';
      }

      this.dialog.open(Alerts, { data: mensagem });
    }
  });
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



}
