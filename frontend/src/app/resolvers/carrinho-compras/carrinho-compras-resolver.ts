import { ResolveFn} from '@angular/router';
import { CarrinhoService } from '../../Carrinho-compras/services/service-carrinho';
import { ValidarService } from '../../login/services/validar-service';
import { Carrinho } from '../../models/carrinho';
import { take } from 'rxjs';
import { inject } from '@angular/core';

export const carrinhoResolver: ResolveFn<Carrinho> = (route, state) => {
  const carrinhoService = inject(CarrinhoService);
  const authService = inject(ValidarService);

  const usuario = authService.getUsuario();
  if (!usuario) {
    throw new Error('Usuário não logado'); // ou redirecionar para login
  }

  return carrinhoService.getCarrinho(Number(usuario.id)).pipe(take(1));
};
