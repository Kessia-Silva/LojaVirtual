import { ItemPedido } from "./itemPedido";

export interface Pedido {
  id: number;
  usuario: string;
  itens: ItemPedido[];
  valorTotal: number;
  dataPedido: Date;
  status: 'PENDENTE' | 'PROCESSANDO' | 'ENVIADO' | 'CANCELADO';
}
