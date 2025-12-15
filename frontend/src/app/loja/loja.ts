import { CardProdutoLoja } from './card-produto-loja/card-produto-loja';
import { ProdutoService } from './../Area-Adm/produtos/services/produto-service';
import { Component } from '@angular/core';
import { Produto } from '../models/produto-model';
import { CommonModule, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { GeneroMusicalService } from '../Area-Adm/genero-musical/services/genero-musical-service';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatSelect, MatOption } from "@angular/material/select";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [MatIconModule, CommonModule, NgFor, CardProdutoLoja, FormsModule,
     MatFormField, MatCheckboxModule, MatProgressSpinner],
  templateUrl: './loja.html',
  styleUrl: './loja.scss',
})
export class Loja {

  produtos: Produto[] = [];
  produtosOriginais: Produto[] = []; // para resetar filtros

  generos: any[] = []; // lista para o dropdown de categorias

  precoMin: number = 0;
  precoMax: number = 1000;

  // AQUI: dois serviços funcionando juntos
  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private generoService: GeneroMusicalService
  ) {}
loading: boolean = true;
  ngOnInit(): void {

    // Carrega os produtos
    this.route.data.subscribe(data => {

  // 1️⃣ pega os produtos vindos do resolver
  const produtosRecebidos = data['produtos'];

  // 2️⃣ filtra só os ativos
  const produtosAtivos = produtosRecebidos.filter((p: Produto) => p.ativo);

  // 3️⃣ embaralha só os ativos
  this.produtos = this.shuffleArray(produtosAtivos);

  // 4️⃣ guarda a base original (já filtrada)
  this.produtosOriginais = [...this.produtos];

  this.loading = false;
});


    // Carrega os gêneros (quando backend estiver pronto)
    this.generoService.getAll().subscribe(generos => {
      this.generos = generos;
      console.log('Gêneros carregados:', generos);
    });
  }

  filtrarPorPreco() {
    this.produtos = this.produtosOriginais.filter(p =>
      p.preco >= this.precoMin && p.preco <= this.precoMax
    );
  }

  
filtrarPorCategoria(nomeGenero: string) {
  if (!nomeGenero || nomeGenero === 'todos') {
    this.produtos = [...this.produtosOriginais];
    return;
  }

  this.produtoService.getByCategoria(nomeGenero).subscribe(
    (produtos: Produto[]) => {
      this.produtos = produtos.filter(
        (p: Produto) => p.ativo
      );
    }
  );
}



  limparFiltros() {
  this.precoMin = 0;
  this.precoMax = 1000;

  // restaura tudo
  this.produtos = [...this.produtosOriginais];
}

termoBuscaAlbum: string = '';
termoBuscaArtista: string = '';

filtrarPorAlbum() {
  const termo = this.termoBuscaAlbum.trim().toLowerCase();

  if (!termo) {
    this.produtos = [...this.produtosOriginais];
    return;
  }

  this.produtos = this.produtosOriginais.filter(p =>
    p.nome.toLowerCase().includes(termo)
  );
}

filtrarPorArtista() {
  const termo = this.termoBuscaArtista.trim().toLowerCase();

  if (!termo) {
    this.produtos = [...this.produtosOriginais];
    return;
  }

  this.produtos = this.produtosOriginais.filter(p =>
    p.artista.toLowerCase().includes(termo)
  );
}

// Função para embaralhar um array
shuffleArray(array: any[]) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}


}
