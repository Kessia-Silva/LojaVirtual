import { Produto } from "./produto-model";

export interface ItemPedido {
  produto: Produto;
  qtdComprada: number;
}
