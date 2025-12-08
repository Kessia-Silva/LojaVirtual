import { ItemPedido } from "./itemPedido";

export interface Pedido {
  id: number;
  clienteId: string;
  itens: ItemPedido[];
  total: number;
  data: Date;
  status: 'pendente' | 'processando' | 'enviado' | 'cancelado';
}
