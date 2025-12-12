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

@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [MatIconModule, CommonModule, NgFor, CardProdutoLoja, FormsModule, MatFormField, MatCheckboxModule],
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
    private produtoService: ProdutoService,
    private generoService: GeneroMusicalService
  ) {}

  ngOnInit(): void {

    // Carrega os produtos
    this.produtoService.getProdutos().subscribe(produtos => {
      this.produtos = produtos;
      this.produtosOriginais = produtos;

      console.log('Produtos carregados:', produtos);
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
      // reset dos produtos
      this.produtos = this.produtosOriginais;
      return;
    }

    this.produtoService.getByCategoria(nomeGenero).subscribe(produtos => {
      this.produtos = produtos;
    });
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


}
