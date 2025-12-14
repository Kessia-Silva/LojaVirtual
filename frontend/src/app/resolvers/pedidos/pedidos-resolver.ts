import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pedido } from '../../models/pedido-model';
import { PedidoService } from '../../Area-Adm/pedidos/services/pedido-service';

@Injectable({ providedIn: 'root' })
export class PedidoResolver implements Resolve<Pedido[]> {

  constructor(private pedidoService: PedidoService) {}

  resolve(): Observable<Pedido[]> {
    return this.pedidoService.getPedidos().pipe(
      catchError(err => {
        console.error('Erro ao carregar pedidos via resolver', err);
        return of([]); // retorna lista vazia em caso de erro
      })
    );
  }
}
