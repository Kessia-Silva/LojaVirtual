import { GeneroMusical } from './generoMusical-models';


export interface Produto {
  id: number;
  nome: string;
  artista: string;
  descricao: string;
  preco: number;
  estoque: number;
  generoMusical: GeneroMusical;
  imagemUrl: string;
  ativo: boolean
}
