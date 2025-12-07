import { Injectable } from '@angular/core';
import { Produto } from '../model/produto-model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  private readonly API = 'api/produtos';

  constructor(private httpClient: HttpClient) {}

   private produtos: Produto[] = [
    { id: "1", nome: 'Hamilton', preco: 99.9, estoque: 100, generoMusical: 'Pop', imagemUrl: 'assets/img/fotos-produtos/produto1.jpeg' },
    { id: "2", nome: 'Arlindo Cruz', preco: 199.9, estoque: 300, generoMusical: 'MPB', imagemUrl: 'assets/img/fotos-produtos/produto10.jpeg' }
  ];


  private produtosSubject = new BehaviorSubject<Produto[]>(this.produtos);

  // Retorna um Observable para os componentes se inscreverem
  getProdutos(): Observable<Produto[]> {
    return this.produtosSubject.asObservable();
    // quando integrar backend, troque por:
    // return this.httpClient.get<Produto[]>('/api/produtos');
  }
  /*list(){
    return this.httpClient.get<Produto[]>(this.API).pipe(
      first(),
      delay(10000),

    );
  }*/

  // Adiciona um produto (mock). Gera id como string.
  addProduto(produto: Produto): void {
    produto.id = new Date().getTime().toString(); // id string temporário
    // ou: produto.id = crypto.randomUUID(); // se quiser UUID (navegador moderno)
    this.produtos.push(produto);
    this.produtosSubject.next(this.produtos);
    // return this.httpClient.post('/api/produtos', produto);
  }
  /*  // trocar com backend:
  private addProduto(record: Partial<Produto>){
 return this.httpClient.post<Produto>(this.API, record);
 }*/

  // Atualiza produto existente — só atualiza caso encontre
  updateProduto(produto: Produto): void {
    const index = this.produtos.findIndex(p => p.id === produto.id);
    if (index !== -1) {
      this.produtos[index] = produto;
      this.produtosSubject.next(this.produtos);
    } else {
      console.warn('Produto não encontrado para update:', produto.id);
    }
    // com backend: return this.httpClient.put(`/api/produtos/${produto.id}`, produto);
  }
  /*
   // trocar com backend:
   private updateProduto(record: Partial<Produto>){
 return this.httpClient.put<Produto>(`${this.API}/${record.id}`, record);
 }
  */

  // Remove por id (string)
  deleteProduto(id: string): void {
    this.produtos = this.produtos.filter(p => p.id !== id);
    this.produtosSubject.next(this.produtos);
    // com backend: return this.httpClient.delete(`/api/produtos/${id}`);
  }
  // trocar com backend:
  /* deleteProduto(id: string){
 return this.httpClient.delete(`${this.API}/${id}`);
 } */
}

