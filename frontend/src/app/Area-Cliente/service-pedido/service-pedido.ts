import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-pedido',
  imports: [],
  templateUrl: './service-pedido.html',
  styleUrl: './service-pedido.scss',
})
export class ServicePedido {
  private apiUrl = 'http://localhost:8080/api/pedidos';

  constructor(private http: HttpClient) {}

  criarPedido(pedidoDTO: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pedidoDTO);
  }

  listarPorUsuario(usuarioId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuario/${usuarioId}`);
  }

}
