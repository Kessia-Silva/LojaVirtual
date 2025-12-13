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
  // Monta um objeto seguro para o backend
  const produtoEnviar = {
    nome: produto.nome,
    artista: produto.artista,
    descricao: produto.descricao,
    preco: produto.preco,
    estoque: produto.estoque,
    imagemUrl: produto.imagemUrl,
    generoMusical: { id: produto.generoMusical.id } // só o ID
  };

  console.log("📦 Produto enviado para o backend:", produtoEnviar);

  return this.http.post<Produto>(this.API, produtoEnviar);
}


  // 5. Atualizar produto existente
  updateProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.API}/${produto.id}`, produto);
  }

  // 6. Deletar produto
  deleteProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  // 6.1 Desativar produto (soft delete)
desativarProduto(id: number): Observable<Produto> {
  return this.http.patch<Produto>(`${this.API}/${id}/desativar`, {});
}

  // 7. Buscar produtos por categoria
 getByCategoria(nomeGenero: string): Observable<Produto[]> {
  return this.http.get<Produto[]>(`${this.API}/categoria/${nomeGenero}`);
}

// 8. Buscar produtos mais vendidos
  getMaisVendidos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.API}/mais-vendidos`);
  }


}

