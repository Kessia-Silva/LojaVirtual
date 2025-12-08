import { Injectable } from '@angular/core';
import { BehaviorSubject, first, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../../../models/produto-model';
@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly API = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) {}

  // 1. Listar todos os produtos
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API);
  }

  // 2. Buscar produto por ID
  getProdutoById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.API}/${id}`);
  }

  // 3. Buscar produtos por nome
  buscarPorNome(nome: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.API}/buscar?nome=${nome}`);
  }

  // 4. Criar produto novo
  addProduto(produto: Produto): Observable<Produto> {
    console.log("📦 Produto enviado para o backend:", produto);
    return this.http.post<Produto>(this.API, produto);
  }

  // 5. Atualizar produto existente
  updateProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.API}/${produto.id}`, produto);
  }

  // 6. Deletar produto
  deleteProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

}

