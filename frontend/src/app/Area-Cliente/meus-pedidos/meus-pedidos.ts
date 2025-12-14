import { Component } from '@angular/core';
import { Pedido } from '../../models/pedido-model';
import { ServicePedido } from '../Services/service-pedido';
import { ValidarService } from '../../login-Adm/services/validar-service';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { PedidoService } from '../../Area-Adm/pedidos/services/pedido-service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private pedidoService: ServicePedido,
    private pedidoServicoAdm: PedidoService,
    private authService: ValidarService,
    private route: ActivatedRoute,
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





cancelarPedido(pedido: Pedido) {
  if (pedido.status !== 'PENDENTE') return;

  if (confirm(`Deseja realmente cancelar o pedido nº ${pedido.id}?`)) {
    this.pedidoServicoAdm.atualizarStatus(pedido.id, 'CANCELADO').subscribe({
      next: (pedidoAtualizado: Pedido) => {
        pedido.status = pedidoAtualizado.status;
        this.filtrarPedidos(this.statusSelecionado);
      },
      error: (err) => {
        console.error('Erro ao cancelar pedido', err);
        alert('Não foi possível cancelar o pedido. Tente novamente.');
      }
    });
  }
}

confirmarPedido(pedido:Pedido){
  if(pedido.status !== 'ENVIADO') return;

  if(confirm(`Deseja realmente cancelar o pedido nº ${pedido.id}?`)){
    this.pedidoServicoAdm.atualizarStatus(pedido.id, 'ENTREGUE').subscribe({
      next: (pedidoAtualizado: Pedido) => {
        pedido.status = pedidoAtualizado.status;
        this.filtrarPedidos(this.statusSelecionado)
      },
      error: (err) => {
        console.error("Erro ao colocar como ENTREGUE o pedido ", err);
        alert("Não foi possível colocar como ENTREGUE o pedido. Tente novamente.");
      }
    })
  }

}



}
