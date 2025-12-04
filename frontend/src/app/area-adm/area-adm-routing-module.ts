import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProduto } from './cadastrar-produto/cadastrar-produto';
import { EditarProduto } from './editar-produto/editar-produto';
import { RemoverProduto } from './remover-produto/remover-produto';
import { VisualizarProdutos } from './visualizar-produtos/visualizar-produtos';
import { VisualizarDetalhesPedido } from './visualizar-detalhes-pedido/visualizar-detalhes-pedido';
import { AtualizarStatusPedido } from './atualizar-status-pedido/atualizar-status-pedido';
import { GerenciarGeneroMusical } from './gerenciar-genero-musical/gerenciar-genero-musical';
import { AreaAdm } from './area-adm/area-adm';

const routes: Routes = [
  { path: '', component: AreaAdm },
  {path: 'cadastrarProduto', component:CadastrarProduto},
  {path: 'editarProduto', component:EditarProduto},
  {path: 'removerProduto', component:RemoverProduto},
  {path: 'visualizarProdutos', component:VisualizarProdutos},
  {path: 'visualizarDetalhesPedido', component:VisualizarDetalhesPedido},
  {path: 'atualizarStatusPedido', component:AtualizarStatusPedido},
  {path: 'gerenciarGeneroMusical', component:GerenciarGeneroMusical},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaAdmRoutingModule { }
