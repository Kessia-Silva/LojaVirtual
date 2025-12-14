import { Component } from '@angular/core';
import { Pedido } from '../../models/pedido-model';
import { ServicePedido } from '../Services/service-pedido';
import { ValidarService } from '../../login/services/validar-service';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { PedidoService } from '../../Area-Adm/pedidos/services/pedido-service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-pedidos',
  imports: [CommonModule],
  templateUrl: './meus-pedidos.html',
  styleUrl: './meus-pedidos.scss',
})
export class MeusPedidos {

  statusSelecionado = 'todos';
  pedidos: Pedido[] = [];
  pedidosFiltrados: Pedido[] = [];
  loading = false;
  pedidoSelecionado: Pedido | null = null;
acaoModal: 'cancelar' | 'confirmar' | null = null;

  constructor(
    private pedidoService: ServicePedido,
    private pedidoServicoAdm: PedidoService,
    private authService: ValidarService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.pedidos = this.route.snapshot.data['pedidos'];
    this.filtrarPedidos(this.statusSelecionado);
    this.loading = false;
  }
/*
  carregarPedidos() {
    this.loading = true;
    const usuarioId = this.authService.getUsuario();

    this.pedidoService.listarPorUsuario(Number(usuarioId?.id)).subscribe({
      next: (pedidos) => {
        this.pedidos = pedidos;
        this.filtrarPedidos(this.statusSelecionado);
        console.log(this.pedidosFiltrados.map(p => p.status));
        this.loading = false;
      },
      error: (err) => {
        console.log("Erro carregando pedidos:", err);
        this.loading = false;
      }
    });
  }*/

  filtrarPedidos(status: string) {
    this.statusSelecionado = status;
    if (status === 'todos') {
      this.pedidosFiltrados = [...this.pedidos];
    } else {
      this.pedidosFiltrados = this.pedidos.filter(p => p.status === status);
    }
  }





confirmarAcao() {
  if (!this.pedidoSelecionado || !this.acaoModal) return;

  const novoStatus =
    this.acaoModal === 'cancelar' ? 'CANCELADO' : 'ENTREGUE';

  this.pedidoServicoAdm
    .atualizarStatus(this.pedidoSelecionado.id, novoStatus)
    .subscribe({
      next: (pedidoAtualizado) => {
        this.pedidoSelecionado!.status = pedidoAtualizado.status;
        this.filtrarPedidos(this.statusSelecionado);
        this.fecharModal();
      },
      error: () => {
        alert('Erro ao atualizar o pedido.');
        this.fecharModal();
      }
    });
}

voltarParaMinhaConta() {
  this.router.navigate(['/cliente/minha-Conta']); // ajuste para a rota correta
}


abrirModal(pedido: Pedido, acao: 'cancelar' | 'confirmar') {
  this.pedidoSelecionado = pedido;
  this.acaoModal = acao;
}

fecharModal() {
  this.pedidoSelecionado = null;
  this.acaoModal = null;
}

}
