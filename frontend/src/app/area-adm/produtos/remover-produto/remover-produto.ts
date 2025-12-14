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
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../../../shared/confirmation-dialog/confirmation-dialog';
import { Alerts } from '../../../shared/alerts/alerts';

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
  buscaProduto = '';

  loadingProdutos = true;
  mensagemSucesso: string | null = null;
  removendo = false;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  // 🔹 Resolver mantém a página sincronizada
  carregarProdutos(): void {
    this.route.data.subscribe({
      next: ({ produtos }) => {
        this.produtos = produtos;
        this.produtosFiltrados = produtos;
        this.loadingProdutos = false;
      },
      error: () => this.loadingProdutos = false
    });
  }

  filtrarProdutos(): void {
    const termo = this.buscaProduto.toLowerCase();
    this.produtosFiltrados = this.produtos.filter(p =>
      p.nome.toLowerCase().includes(termo)
    );
  }

  // 🔹 ETAPA 1 — confirmação de exclusão
  abrirConfirmacao(produto: Produto): void {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: `Tem certeza que deseja excluir o produto "${produto.nome}"?`
    });

    dialogRef.afterClosed().subscribe(confirmou => {
      if (confirmou) {
        this.tentarExcluir(produto);
      }
    });
  }

  // 🔹 ETAPA 2 — tenta excluir no backend
  tentarExcluir(produto: Produto): void {
  if (this.removendo) return;
  this.removendo = true;

  this.produtoService.deleteProduto(produto.id).subscribe({
    next: () => {
      this.produtos = this.produtos.filter(p => p.id !== produto.id);
      this.filtrarProdutos();

      this.dialog.open(Alerts, {
        data: `Produto "${produto.nome}" removido com sucesso!`
      });

      this.removendo = false;
    },
    error: () => {
      this.removendo = false;
      this.confirmarDesativacao(produto);
    }
  });
}


  // 🔹 ETAPA 3 — não pode excluir → perguntar se desativa
  confirmarDesativacao(produto: Produto): void {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: 'Produto com histórico de pedidos não pode ser excluído. Deseja desativar o produto?'
    });

    dialogRef.afterClosed().subscribe(confirmou => {
      if (confirmou) {
        this.desativarProduto(produto);
      }
    });
  }

 // 🔹 ETAPA 4 — desativar
desativarProduto(produto: Produto): void {
  this.produtoService.desativarProduto(produto.id).subscribe({
    next: () => {
      produto.ativo = false;

      this.dialog.open(Alerts, {
        data: `Produto "${produto.nome}" desativado com sucesso!`
      });
    },
    error: () => {
      this.dialog.open(Alerts, {
        data: 'Erro ao desativar produto.'
      });
    }
  });
}


}

