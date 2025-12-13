import { Component } from '@angular/core';
import { Pedido } from '../../models/pedido-model';
import { ServicePedido } from '../Services/service-pedido';
import { ValidarService } from '../../login-Adm/services/validar-service';
import { CommonModule, TitleCasePipe } from '@angular/common';

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
    private authService: ValidarService
  ) {}

  ngOnInit(): void {
    this.carregarPedidos();
  }

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
  }

  filtrarPedidos(status: string) {
    this.statusSelecionado = status;
    if (status === 'todos') {
      this.pedidosFiltrados = [...this.pedidos];
    } else {
      this.pedidosFiltrados = this.pedidos.filter(p => p.status === status);
    }
  }








}
