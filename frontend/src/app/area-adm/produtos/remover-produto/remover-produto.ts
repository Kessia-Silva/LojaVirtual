import { ChangeDetectorRef, Component } from '@angular/core';
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
      mensagemSucesso: string | null = null;
removendo: boolean = false;




  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
      private cdr: ChangeDetectorRef // <--- injeta o ChangeDetectorRef

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
     if (!this.produtoSelecionado || this.removendo) return;

  this.removendo = true;
  const produto = this.produtoSelecionado;

  // Atualiza lista e fecha modal
  this.produtos = this.produtos.filter(p => p.id !== produto.id);
  this.filtrarProdutos();
  this.produtoSelecionado = null;

  // Mostra mensagem imediatamente
  this.mensagemSucesso = `Produto "${produto.nome}" removido com sucesso!`;

  // força Angular a detectar a mudança
  this.cdr.detectChanges();

  // requisição ao backend
  this.produtoService.deleteProduto(produto.id).subscribe({
    next: () => {
      this.removendo = false;
    },
      error: (err) => {
        console.error("Erro ao remover produto", err);
        alert("Erro ao remover produto.");
      }
    });
  }

}

