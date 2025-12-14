import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../../models/pedido-model';

@Injectable({
  providedIn: 'root',
})
export class ServicePedido {
  private apiUrl = 'http://localhost:8080/api/pedidos';

  constructor(private http: HttpClient) {}

  criarPedido(pedidoDTO: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pedidoDTO);
  }

  listarPorUsuario(usuarioId: number): Observable<Pedido[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuario/${usuarioId}`);
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
