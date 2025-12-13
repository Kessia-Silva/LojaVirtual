import { Component } from '@angular/core';
import { AsyncPipe, NgFor, CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProdutoService } from '../services/produto-service';
import { FormsModule } from '@angular/forms';
import { NavbarInternoAdm } from "../../../navbar/navbar-interno-adm/navbar-interno-adm";
import { Produto } from '../../../models/produto-model';
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remover-produto',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatIconModule, AsyncPipe, NgFor, FormsModule, CommonModule, NavbarInternoAdm, MatProgressSpinner],
  templateUrl: './remover-produto.html',
  styleUrl: './remover-produto.scss',
})

export class RemoverProduto {

  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  buscaProduto: string = '';
  produtoSelecionado: Produto | null = null;
      loadingProdutos = true;


  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }



  // Carrega todos os produtos do backend
carregarProdutos(): void {
    this.loadingProdutos = true;

    this.route.data.subscribe({
      next: ({ produtos }) => {
        this.produtos = produtos;
        this.produtosFiltrados = produtos;
        this.loadingProdutos = false;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos', err);
        this.loadingProdutos = false;
      }
    });
  }


  // Filtra a lista pelo nome
  filtrarProdutos(): void {
    const termo = this.buscaProduto.toLowerCase();
    this.produtosFiltrados = this.produtos.filter(
      p => p.nome.toLowerCase().includes(termo)
    );
  }

  // Abre modal de confirmação
  abrirConfirmacao(produto: Produto): void {
    this.produtoSelecionado = produto;
  }

  // Remove produto após confirmação
  removerProduto(): void {
    if (!this.produtoSelecionado) return;

    this.produtoService.deleteProduto(this.produtoSelecionado.id).subscribe({
      next: () => {
        // remove da lista local
        this.produtos = this.produtos.filter(
          p => p.id !== this.produtoSelecionado!.id
        );

        // atualiza lista filtrada
        this.filtrarProdutos();

        alert('Produto removido com sucesso!');

        this.produtoSelecionado = null;
      },
      error: (err) => {
        console.error("Erro ao remover produto", err);
        alert("Erro ao remover produto.");
      }
    });
  }

}

