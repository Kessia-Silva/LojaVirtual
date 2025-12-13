import { ItemPedido } from "./itemPedido";
import { Usuario } from "./usuarioLogin-model";

export interface Pedido {
  id: number;
  usuario: Usuario;
  itens: ItemPedido[];
  valorTotal: number;
  dataPedido: Date;
  status: 'PENDENTE' | 'PROCESSANDO' | 'ENVIADO' | 'ENTREGUE' |'CANCELADO';
}
