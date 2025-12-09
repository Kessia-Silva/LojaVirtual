import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProdutosService } from './services/produtos';
import { CommonModule,NgFor } from '@angular/common';
import { ProdutoCard } from '../produto-card/produto-card';
import { Produto } from '../models/produto-model';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, CommonModule, ProdutoCard,NgFor],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    // chamar os mais vendidos
  }
}
