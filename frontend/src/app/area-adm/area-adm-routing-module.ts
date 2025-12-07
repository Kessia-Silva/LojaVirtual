import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProduto } from './produtos/cadastrar-produto/cadastrar-produto';
import { EditarProduto } from './produtos/editar-produto/editar-produto';
import { RemoverProduto } from './produtos/remover-produto/remover-produto';
import { VisualizarProdutos } from './produtos/visualizar-produtos/visualizar-produtos';
import { VisualizarDetalhesPedido } from './pedidos/visualizar-detalhes-pedido/visualizar-detalhes-pedido';
import { AtualizarStatusPedido } from './pedidos/atualizar-status-pedido/atualizar-status-pedido';
import { GerenciarGeneroMusical } from './produtos/gerenciar-genero-musical/gerenciar-genero-musical';
import { AreaAdm } from './area-adm/area-adm';
import { VisualizarPedidos } from './pedidos/visualizar-pedidos/visualizar-pedidos';

const routes: Routes = [
  { path: '', component: AreaAdm },
  {path: 'cadastrarProduto', component:CadastrarProduto},
  {path: 'editarProduto', component:EditarProduto},
  {path: 'removerProduto', component:RemoverProduto},
  {path: 'visualizarProdutos', component:VisualizarProdutos},
  {path: 'visualizarDetalhesPedido', component:VisualizarDetalhesPedido},
  {path: 'atualizarStatusPedido', component:AtualizarStatusPedido},
  {path: 'gerenciarGeneroMusical', component:GerenciarGeneroMusical},
  {path: 'visualizarPedidos', component: VisualizarPedidos},
/*
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
