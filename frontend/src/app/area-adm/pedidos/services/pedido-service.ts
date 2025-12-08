import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { Pedido } from '../../../models/pedido-model';


@Injectable({
  providedIn: 'root',
})
export class PedidoService {
/* Com o banco
   private apiUrl = 'http://localhost:8080/pedidos';

  constructor(private http: HttpClient) {}

  buscarPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl);
  }

  atualizarPedido(pedido: Pedido): Observable<any> {
    return this.http.put(`${this.apiUrl}/${pedido.id}`, pedido);
  } */
 private pedidos: Pedido[] = [
  {
    id: 1,
    clienteId: '101',
    data: new Date(),
    status: 'pendente',
    itens: [
      {
        produto: {
          id: 1,
          nome: "Hamilton",         // nome do álbum
          artista: "Lin-Manuel Miranda", // artista
          preco: 99.95,
          descricao: 'Muito bom',
          estoque: 10,
          generoMusical: { id: 1, nome: 'Pop' },
          imagemUrl: 'assets/img/fotos-produtos/produto1.jpeg'
        },
        quantidadeComprada: 2
      },
      {
        produto: {
          id: 2,
          nome: "Madonna Hits",
          artista: "Madonna",       // artista
          preco: 99.95,
          descricao: 'Muito bom',
          estoque: 30,
          generoMusical: { id: 2, nome: 'MPB' },
          imagemUrl: 'assets/img/fotos-produtos/produto3.jpeg'
        },
        quantidadeComprada: 2
      }
    ],
    total: 399.80,
  },
  {
    id: 2,
    clienteId: '102',
    data: new Date(),
    status: 'enviado',
    itens: [
      {
        produto: {
          id: 3,
          nome: "Chico Buarque Clássicos",
          artista: "Chico Buarque",
          preco: 99.95,
          descricao: 'Muito bom',
          estoque: 30,
          generoMusical: { id: 2, nome: 'MPB' },
          imagemUrl: 'assets/img/fotos-produtos/produto2.jpeg'
        },
        quantidadeComprada: 1
      }
    ],
    total: 99.95,
  }
];


  constructor() { }

  getPedidos(): Observable<Pedido[]> {
    return of(this.pedidos);
  }

  atualizarStatus(id: number, novoStatus: Pedido['status']): Observable<Pedido> {
    const pedido = this.pedidos.find(p => p.id === id);
    if (pedido) {
      pedido.status = novoStatus;
    }
    return of(pedido!);
  }




}
