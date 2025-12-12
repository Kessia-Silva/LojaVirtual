import { Component, Input } from '@angular/core';
import { Produto } from '../../models/produto-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-produto-loja',
  imports: [],
  templateUrl: './card-produto-loja.html',
  styleUrl: './card-produto-loja.scss',
})
export class CardProdutoLoja {
  @Input() produto!: Produto ;

  constructor(private router: Router) { }

  irParaProduto(id: number) {
  this.router.navigate(['/produto-info', id]);
}

}
