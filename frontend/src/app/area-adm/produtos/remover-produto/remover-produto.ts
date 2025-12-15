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
  removendo = false;
  produtoEmAcao: Produto | null = null;

  mensagemSucesso: string | null = null; // mensagem temporária

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.route.data.subscribe({
      next: ({ produtos }) => {
        this.produtos = produtos;
        this.produtosFiltrados = [...produtos];
        this.loadingProdutos = false;
        this.cdr.detectChanges();
      },
      error: () => this.loadingProdutos = false
    });
  }

  filtrarProdutos(): void {
    const termo = this.buscaProduto.toLowerCase();
    this.produtosFiltrados = this.produtos.filter(p =>
      p.nome.toLowerCase().includes(termo)
    );
    this.cdr.detectChanges();
  }

  abrirConfirmacao(produto: Produto): void {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: `Tem certeza que deseja excluir o produto "${produto.nome}"?`
    });

    dialogRef.afterClosed().subscribe(confirmou => {
      if (confirmou) this.tentarExcluir(produto);
    });
  }

  tentarExcluir(produto: Produto): void {
    if (this.removendo) return;
    this.removendo = true;
    this.produtoEmAcao = produto;
    this.cdr.detectChanges();

    this.produtoService.deleteProduto(produto.id).subscribe({
      next: () => {
        this.produtos = this.produtos.filter(p => p.id !== produto.id);
        this.filtrarProdutos();

        this.exibirMensagemSucesso(`Produto "${produto.nome}" removido com sucesso!`);

        this.removendo = false;
        this.produtoEmAcao = null;
        this.cdr.detectChanges();
      },
      error: () => {
        this.removendo = false;
        this.produtoEmAcao = null;
        this.cdr.detectChanges();
        this.confirmarDesativacao(produto);
      }
    });
  }

  confirmarDesativacao(produto: Produto): void {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: 'Produto com histórico de pedidos não pode ser excluído. Deseja desativar o produto?'
    });

    dialogRef.afterClosed().subscribe(confirmou => {
      if (confirmou) this.desativarProduto(produto);
    });
  }

  desativarProduto(produto: Produto): void {
    this.removendo = true;
    this.produtoEmAcao = produto;
    this.cdr.detectChanges();

    this.produtoService.desativarProduto(produto.id).subscribe({
      next: () => {
        produto.ativo = false;
        this.filtrarProdutos();

        this.exibirMensagemSucesso(`Produto "${produto.nome}" desativado com sucesso!`);

        this.removendo = false;
        this.produtoEmAcao = null;
        this.cdr.detectChanges();
      },
      error: () => {
        this.removendo = false;
        this.produtoEmAcao = null;
        this.cdr.detectChanges();
        this.dialog.open(Alerts, { data: 'Erro ao desativar produto.' });
      }
    });
  }

  private exibirMensagemSucesso(msg: string) {
    this.mensagemSucesso = msg;
    this.cdr.detectChanges();

    // some automaticamente após 3 segundos
    setTimeout(() => {
      this.mensagemSucesso = null;
      this.cdr.detectChanges();
    }, 3000);
  }
}


