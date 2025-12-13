import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minha-conta',
  imports: [],
  templateUrl: './minha-conta.html',
  styleUrl: './minha-conta.scss',
})
export class MinhaConta {

constructor(private router: Router) {}

  irParaPedidos() {
    this.router.navigate(['cliente/meus-pedidos']);
  }

  irParaEditarConta() {
    this.router.navigate(['cliente/editar-conta']);
  }

  irParaHistorico() {
    this.router.navigate(['cliente/historico']);
  }

  irParaEnderecos() {
    this.router.navigate(['cliente/enderecos']);
  }

}
