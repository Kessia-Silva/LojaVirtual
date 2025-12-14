import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProduto } from './produtos/cadastrar-produto/cadastrar-produto';
import { EditarProduto } from './produtos/editar-produto/editar-produto';
import { RemoverProduto } from './produtos/remover-produto/remover-produto';
import { VisualizarProdutos } from './produtos/visualizar-produtos/visualizar-produtos';
import { AtualizarStatusPedido } from './pedidos/atualizar-status-pedido/atualizar-status-pedido';
import { GerenciarGeneroMusical } from './genero-musical/gerenciar-genero-musical/gerenciar-genero-musical';
import { AreaAdm } from './home-adm/area-adm';
import { VisualizarPedidos } from './pedidos/visualizar-pedidos/visualizar-pedidos';
import { produtoResolver } from '../resolvers/produto-resolver';
import { PedidoResolver } from '../resolvers/pedidos/pedidos-resolver';

const routes: Routes = [
  { path: '', component: AreaAdm },
  {path: 'cadastrarProduto', component:CadastrarProduto},

  {path: 'editarProduto', component:EditarProduto,
    resolve: {produtos: produtoResolver}
  },

  {path: 'removerProduto', component:RemoverProduto,
    resolve: {produtos: produtoResolver
    }},

  {path: 'visualizarProdutos', component:VisualizarProdutos,
    resolve: {produtos: produtoResolver}
  },
  {path: 'atualizarStatusPedido', component:AtualizarStatusPedido,
    resolve: { pedidos: PedidoResolver }
  },
  {path: 'gerenciarGeneroMusical', component:GerenciarGeneroMusical},
  {path: 'visualizarPedidos', component: VisualizarPedidos,
    resolve: { pedidos: PedidoResolver }
  },
/*
{
  path: 'gerenciarGeneroMusical/new',
    component: GerenciarGeneroMusical
  },
  {
    path: 'gerenciarGeneroMusical/edit/:id',
    component: GerenciarGeneroMusical,
    resolve: { genero: GeneroResolver }  // Aqui o resolver é usado
  } */

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaAdmRoutingModule { }
