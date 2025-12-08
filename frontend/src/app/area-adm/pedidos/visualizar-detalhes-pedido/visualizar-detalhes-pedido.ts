import { Component, EventEmitter, Input, Output} from '@angular/core';
import { NavbarInternoAdm } from "../../../navbar/navbar-interno-adm/navbar-interno-adm";

import { MatIcon } from "@angular/material/icon";
import { CommonModule, NgIf, NgFor, DecimalPipe, DatePipe } from '@angular/common';
import { Pedido } from '../../../models/pedido-model';
@Component({
  selector: 'app-visualizar-detalhes-pedido',
  imports: [NavbarInternoAdm, MatIcon, CommonModule],
  templateUrl: './visualizar-detalhes-pedido.html',
  styleUrl: './visualizar-detalhes-pedido.scss',
})
export class VisualizarDetalhesPedido {

    @Input() pedido!: Pedido;   // recebe o pedido selecionado
  @Output() fecharModal = new EventEmitter<void>();

  fechar() {
    this.fecharModal.emit();
  }

}
