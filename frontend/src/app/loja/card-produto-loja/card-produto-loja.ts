import { Component, Input } from '@angular/core';
import { Produto } from '../../models/produto-model';
import { Router } from '@angular/router';
import { ValidarService } from '../../login/services/validar-service';
import { CarrinhoService } from '../../Carrinho-compras/services/service-carrinho';
import { MatDialog } from '@angular/material/dialog';
import { Alerts } from '../../shared/alerts/alerts';

@Component({
  selector: 'app-card-produto-loja',
  imports: [],
  templateUrl: './card-produto-loja.html',
  styleUrl: './card-produto-loja.scss',
})
export class CardProdutoLoja {
  @Input() produto!: Produto ;

  constructor(
    private validarService: ValidarService,
    private carrinhoService: CarrinhoService,
    private router: Router,
    private dialog: MatDialog
  ) {}

// Função para adicionar ao carrinho
adicionarAoCarrinho(produto: Produto) {
  const usuario = this.validarService.getUsuario();

  if (usuario) {
    this.carrinhoService.adicionarItem(Number(usuario.id), produto.id, 1)
      .subscribe({
        next: (response) => {
          console.log('Produto adicionado ao carrinho', response);

          // 🔥 Aqui abre o aviso de sucesso!
          this.dialog.open(Alerts, {
            data: 'Produto adicionado ao carrinho!',
            width: '300px'
          });
        },
        error: (error) => {
          console.error(error);

          // 🔥 Aviso de erro
          this.dialog.open(Alerts, {
            data: 'Erro ao adicionar ao carrinho.',
            width: '300px'
          });
        }
      });

  } else {
    this.router.navigate(['/login']);
  }
}
  irParaProduto(id: number) {
  this.router.navigate(['/produto-info', id]);
}

}
