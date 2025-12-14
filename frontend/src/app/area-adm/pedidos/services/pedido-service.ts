import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { Pedido } from '../../../models/pedido-model';


@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private apiUrl = 'http://localhost:8080/api/pedidos';

  constructor(private http: HttpClient) {}

  // Buscar todos os pedidos
  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl);
  }

  // Buscar pedido por ID (opcional, mas útil)
  getPedidoById(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.apiUrl}/${id}`);
  }

  // Atualizar pedido (ex: status)
  atualizarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.apiUrl}/${pedido.id}`, pedido);
  }

 // Atualizar somente o status
atualizarStatus(id: number, novoStatus: Pedido['status']): Observable<Pedido> {
  console.log('Status enviado:', novoStatus);

  return this.http.put<Pedido>(
    `${this.apiUrl}/${id}/status`,
    JSON.stringify(novoStatus),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

}
