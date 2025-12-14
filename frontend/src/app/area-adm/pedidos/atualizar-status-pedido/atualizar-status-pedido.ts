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
import { Pedido } from '../../../models/pedido-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar-status-pedido',
  imports: [MatFormField, MatLabel, MatButtonModule, MatOption, MatSelect, CommonModule, MatCardModule, FormsModule, NavbarInternoAdm],
  templateUrl: './atualizar-status-pedido.html',
  styleUrl: './atualizar-status-pedido.scss',
})
export class AtualizarStatusPedido {
   pedidos: Pedido[] = [];
    pedidosFiltrados: Pedido[] = [];
    statusSelecionado: string = 'todos';

    constructor(
      private pedidoService: PedidoService,
    private route: ActivatedRoute
  ) {}

    ngOnInit(): void {

  this.pedidos = this.route.snapshot.data['pedidos'];
  this.filtrarStatus();
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

    atualizarStatus(pedido: Pedido, novoStatus: Pedido['status']) {
      this.pedidoService.atualizarStatus(pedido.id, novoStatus).subscribe({
        next: (pedidoAtualizado) => {
          pedido.status = pedidoAtualizado.status;
          this.filtrarStatus();
        },
        error: (err) => console.error(err)
      });
    }

}
