// 1. Importe OnInit do core
import { Component, NgModule, OnInit } from '@angular/core';
// 2. Ajuste o nome da classe para CarrinhoService (se for o nome correto)
import { CarrinhoService } from './services/service-carrinho';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Produto } from '../models/produto-model';
import { ProdutoService } from '../Area-Adm/produtos/services/produto-service';
import { AuthGuard } from '../Services/AuthUser-guard/auth-guard';
import { ValidarService } from '../login/services/validar-service';
import { Carrinho, ItemCarrinho } from '../models/carrinho';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatProgressSpinner, MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FormsModule } from '@angular/forms';
import { ServicePedido } from '../Area-Cliente/Services/service-pedido';
import { Usuario } from '../models/usuarioLogin-model';
import { Alerts } from '../Area-Adm/shared/components/alerts/alerts';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'carrinho-compras',
  standalone: true, // Adicionado para componentes Standalone
  imports: [ AsyncPipe, CurrencyPipe, RouterModule, MatProgressSpinner,MatProgressSpinnerModule,CommonModule,FormsModule],
  templateUrl: './carrinho-compras.html',
  styleUrl: './carrinho-compras.scss',
})

export class CarrinhoCompras implements OnInit{
  loading = true;  // precisa iniciar como true para ver o spinner
 carrinho!: Carrinho; // carrinho completo
  carregando = true;
  usuario: Usuario | null = null;

  constructor(
    private carrinhoService: CarrinhoService,
    private authService: ValidarService,
    private router: Router,
    private pedidoService: ServicePedido,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}


  ngOnInit(): void {
    this.usuario = this.authService.getUsuario();
// Simula 5 segundos de carregamento
     // pega o carrinho já resolvido pelo resolver
  this.route.data.subscribe({
      next: (data) => {
        this.carrinho = data['carrinho'];
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro carregando carrinho via resolver:', err);
        this.loading = false;
      }
    });
  }

/*
  carregarCarrinho() {
    this.loading = true;
    const usuarioId = this.authService.getUsuario();

    this.carrinhoService.getCarrinho(Number(usuarioId?.id)).subscribe({
      next: (c) => {
        this.carrinho = c;
        this.carregando = false;
        this.loading = false;
      },
      error: (err) => {
        console.log("Erro carregando carrinho:", err);
        this.carregando = false;
        this.loading = false;
      }
    });
  }*/

  aumentar(item: ItemCarrinho) {
  const usuario = this.authService.getUsuario();
  if (!usuario) return;

  this.carrinhoService.aumentar(Number(usuario.id), item).subscribe(() => {
    //this.carregarCarrinho();
    this.atualizarCarrinho();
  });
}

diminuir(item: ItemCarrinho) {
  const usuario = this.authService.getUsuario();
  if (!usuario) return;

  this.carrinhoService.diminuir(Number(usuario.id), item).subscribe(() => {
    //this.carregarCarrinho();
    this.atualizarCarrinho();
  });
}

remover(item: ItemCarrinho) {
  const usuario = this.authService.getUsuario();
  if (!usuario) return;

  this.carrinhoService.removerItem(Number(usuario.id), item.produto.id).subscribe(() => {
    //this.carregarCarrinho();
    this.atualizarCarrinho();
  });
}

private atualizarCarrinho() {
    const usuario = this.authService.getUsuario();
    if (!usuario) return;

    this.loading = true;
    this.carrinhoService.getCarrinho(Number(usuario.id)).subscribe({
      next: (c) => {
        this.carrinho = c;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao atualizar carrinho:', err);
        this.loading = false;
      }
    });
  }

checkoutAtivo = false;

toggleCheckout() {
  this.checkoutAtivo = !this.checkoutAtivo;
}

// dentro da classe do componente
formaPagamentoSelecionada: string | null = null;

selecionarPagamento(tipo: string) {
  this.formaPagamentoSelecionada = tipo;
}


finalizarPedido() {
  const usuario = this.authService.getUsuario();
  if (!usuario) return;

  const pedidoDTO = {
    usuarioId: usuario.id,
    itens: this.carrinho.itens.map(i => ({
      produtoId: i.produto.id,
      quantidade: i.quantidade
    }))
  };

  this.pedidoService.criarPedido(pedidoDTO).subscribe({
    next: (pedidoCriado) => {
      console.log('Pedido criado:', pedidoCriado);

      // ⚡ Usando modal ao invés de alert
      this.dialog.open(Alerts, {
        data: 'Pedido finalizado com sucesso!'
      });

      // Limpar carrinho
      // this.carrinhoService.limparCarrinho(Number(usuario.id)).subscribe(() => {
      //  this.carrinho.itens = [];
      //  this.carrinho.valorTotal = 0;
      //});

      // Redireciona para a página Meus Pedidos
      this.router.navigate(['/cliente/meus-pedidos']);

      // Fecha o modal de checkout
      this.checkoutAtivo = false;

      // Resetar seleção de pagamento
      this.formaPagamentoSelecionada = null;
    },
    error: (err) => {
      console.error('Erro ao criar pedido:', err);

      // Modal de erro
      this.dialog.open(Alerts, {
        data: 'Erro ao finalizar pedido.'
      });
    }
  });
}

// Valor do frete selecionado
freteSelecionado: number = 0;

// Função para atualizar frete
selecionarFrete(event: Event) {
  const select = event.target as HTMLSelectElement; // <--- aqui dizemos que é um select
  this.freteSelecionado = Number(select.value);
}

temItensNoCarrinho(): boolean {
  return !!(this.carrinho && this.carrinho.itens && this.carrinho.itens.length > 0);
}



// Getter para total com frete
get totalComFrete(): number {
  return (this.carrinho?.valorTotal || 0) + this.freteSelecionado;
}

}
