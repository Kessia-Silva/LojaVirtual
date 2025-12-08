import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produto } from '../../home/services/produtos';


@Injectable({
  // providedIn: 'root' garante que o serviço esteja disponível
  // em toda a aplicação (Singleton).
  providedIn: 'root'
})

export class CarrinhoService {
  // A lista de produtos que você tinha no componente, agora no serviço
  private listaProdutos: Produto[] = [
    {
      id: 1,
      nome: 'Hamilton',
      preco: 99.90,
      imagem: 'assets/img/fotos-produtos/produto1.jpeg',
      vendidos: 150,
      estoque: 400,
      categoria: 'Pop'
    },
    {
      id: 2,
      nome: 'Idiota - Jão',
      preco: 89.90,
      imagem: 'assets/img/fotos-produtos/produto9.jpeg',
      vendidos: 200,
      estoque: 950,
      categoria: 'Pop'
    },
    {
      id: 3,
      nome: 'BTS WORLD',
      preco: 120.00,
      imagem: 'assets/img/fotos-produtos/produto11.jpeg',
      vendidos: 180,
      estoque: 800,
      categoria: 'K-Pop'
    },
    {
      id: 4,
      nome: 'Adele 21',
      preco: 75.50,
      imagem: 'assets/img/fotos-produtos/produto7.jpg',
      vendidos: 160,
      estoque: 1000,
      categoria: 'Clássico'
    }
  ];

  // Usamos um BehaviorSubject para armazenar o estado do carrinho.
  // Ele permite que novos componentes recebam o valor atual imediatamente ao se inscreverem.
  private carrinhoSource = new BehaviorSubject<Produto[]>(this.listaProdutos);

  // O Observable público que os componentes usarão.
  // Usamos .asObservable() para evitar que o componente chame .next() e altere o estado.
  carrinho$ = this.carrinhoSource.asObservable();

  constructor() { }

  // Exemplo: Método para adicionar um item (você pode expandir isso)
  adicionarItem(produto: Produto): void {
    // Lógica para adicionar ou aumentar a quantidade e enviar pro banco
  }



}
