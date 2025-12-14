import { Produto } from './../models/produto-model';
import { Component,EventEmitter,Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ValidarService } from '../login/services/validar-service';
import { CarrinhoService } from '../Carrinho-compras/services/service-carrinho';
import { MatDialog } from '@angular/material/dialog';
import { Alerts } from '../Area-Adm/shared/components/alerts/alerts';


@Component({
  selector: 'app-produto-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './produto-card.html',
  styleUrl: './produto-card.scss',
})
export class ProdutoCard {
  @Input() produto!: Produto ;

  constructor(private router: Router,
    private validarService: ValidarService,
    private carrinhoService: CarrinhoService,
    private dialog: MatDialog
  ) { }

    irParaProduto(id: number) {
      this.router.navigate(['/produto-info', id]);
    }
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
}
