import { Component } from '@angular/core';
import { ProdutoService } from '../services/produto-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarInternoAdm } from "../../../navbar/navbar-interno-adm/navbar-interno-adm";
import { Produto } from '../../../models/produto-model';
import { MatProgressSpinner } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-visualizar-produtos',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, CommonModule, NavbarInternoAdm, MatProgressSpinner],
  templateUrl: './visualizar-produtos.html',
  styleUrl: './visualizar-produtos.scss',
})
export class VisualizarProdutos {


    produtos: Produto[] = [];           // Todos os produtos
    produtosFiltrados: Produto[] = [];  // Produtos filtrados pela busca
    buscaProduto: string = '';          // Valor do input de busca
    produtoSelecionado: Produto | null = null; // Produto selecionado para confirmar remoção
          loadingProdutos = true;

    constructor(private produtoService: ProdutoService) { }

    ngOnInit(): void {
      this.produtoService.getProdutos().subscribe(produtos => {
        this.produtos = produtos;
        console.log(produtos);
        this.produtosFiltrados = produtos;
        this.loadingProdutos = false;
      });
    }

    // Filtra os produtos conforme o input
    filtrarProdutos(): void {
      const termo = this.buscaProduto.toLowerCase();
      this.produtosFiltrados = this.produtos.filter(p => p.nome.toLowerCase().includes(termo));
    }

}
