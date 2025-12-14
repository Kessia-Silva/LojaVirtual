import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Pedido } from '../../models/pedido-model';
import { ServicePedido } from '../../Area-Cliente/Services/service-pedido';
import { ValidarService } from '../../login/services/validar-service';

export const meusPedidosResolver: ResolveFn<Pedido[]> = () => {
  const pedidoService = inject(ServicePedido);
  const authService = inject(ValidarService);

  const usuario = authService.getUsuario();

  return pedidoService.listarPorUsuario(Number(usuario?.id));
};
