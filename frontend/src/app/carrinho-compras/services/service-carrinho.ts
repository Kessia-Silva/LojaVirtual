import { GeneroMusical } from './../../models/generoMusical-models';
import { Produto } from './../../models/produto-model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  // providedIn: 'root' garante que o serviço esteja disponível
  // em toda a aplicação (Singleton).
  providedIn: 'root'
})

export class CarrinhoService {
  // A lista de produtos que você tinha no componente, agora no serviço
  private listaGenero: GeneroMusical[] = [
    {
      id:1,
      nome: "Kpop"
    },
    {
      id:2,
      nome: "Pop"
    }

  ];
  private listaProdutos: Produto[] = [];

constructor() {
  this.listaProdutos = [
    {
      id: 1,
      nome: 'Hamilton',
      preco: 99.90,
      imagemUrl: 'assets/img/fotos-produtos/produto1.jpeg',
      artista: "Lin Manuel Miranda",
      estoque: 400,
      descricao: "Musical",
      generoMusical: this.listaGenero[1]   // AGORA FUNCIONA
    },
    {
      id: 3,
      nome: 'BTS WORLD',
      preco: 120.00,
      imagemUrl: 'assets/img/fotos-produtos/produto11.jpeg',
      artista: "BTS",
      estoque: 800,
      descricao: "Album do jogo",
      generoMusical: this.listaGenero[0]   // AGORA FUNCIONA
    }
  ];
}


  // Usamos um BehaviorSubject para armazenar o estado do carrinho.
  // Ele permite que novos componentes recebam o valor atual imediatamente ao se inscreverem.
  private carrinhoSource = new BehaviorSubject<Produto[]>(this.listaProdutos);

  // O Observable público que os componentes usarão.
  // Usamos .asObservable() para evitar que o componente chame .next() e altere o estado.
  carrinho$ = this.carrinhoSource.asObservable();

  // Exemplo: Método para adicionar um item (você pode expandir isso)
  adicionarItem(produto: Produto): void {
    // Lógica para adicionar ou aumentar a quantidade e enviar pro banco
  }



}
