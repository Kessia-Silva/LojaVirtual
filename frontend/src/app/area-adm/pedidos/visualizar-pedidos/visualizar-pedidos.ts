import { Component, OnInit } from '@angular/core';

import { PedidoService } from '../services/pedido-service';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatOption, MatSelect } from "@angular/material/select";
import { CommonModule, NgIf, NgFor, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NavbarInternoAdm } from "../../../navbar/navbar-interno-adm/navbar-interno-adm";
import { VisualizarDetalhesPedido } from "../visualizar-detalhes-pedido/visualizar-detalhes-pedido";
import { Pedido } from '../../../models/pedido-model';
@Component({
  selector: 'app-visualizar-pedidos',
  imports: [MatFormField, MatOption, MatLabel, MatSelect,
    FormsModule, MatFormFieldModule, MatSelectModule, CommonModule,
    NgIf, NgFor, DecimalPipe, DatePipe, MatCardModule, MatButtonModule, NavbarInternoAdm, VisualizarDetalhesPedido],
  templateUrl: './visualizar-pedidos.html',
  styleUrl: './visualizar-pedidos.scss',
})
export class VisualizarPedidos implements OnInit{

  pedidos: Pedido[] = [];
  pedidosFiltrados: Pedido[] = [];
  statusSelecionado: string = 'todos';
  pedidoSelecionado?: Pedido;  // para abrir o modal

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.carregarPedidos();
  }

  carregarPedidos(): void {
    this.pedidoService.getPedidos().subscribe({
      next: (lista) => {
        this.pedidos = lista;
        this.filtrarStatus();
      },
      error: (err) => console.error(err)
    });
  }

  filtrarStatus(): void {
    if (this.statusSelecionado === 'todos') {
      this.pedidosFiltrados = this.pedidos;
    } else {
      this.pedidosFiltrados = this.pedidos.filter(
        p => p.status === this.statusSelecionado
      );
    }
  }

   abrirDetalhes(pedido: Pedido) {
    this.pedidoSelecionado = pedido;
  }

  fecharModal() {
    this.pedidoSelecionado = undefined;
  }
}
