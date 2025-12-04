import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Contato } from './contato/contato'

import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { AreaAdmModule } from './area-adm/area-adm-module';
import { AreaCliente } from './Area-Cliente/area-cliente/area-cliente';

import { ProdutoInfo } from './produto-info/produto-info/produto-info';

import { LoginAdm } from './login-Adm/login-adm/login-adm';
import { Loja } from './loja/loja';
import { CarrinhoCompras } from './Carrinho-compras/carrinho-compras';

import { LayoutPublico } from './layout-publico/layout-publico';
import { LayoutCliente } from './layout-cliente/layout-cliente';
import { LayoutAdm } from './layout-adm/layout-adm';

export const routes: Routes = [

  // 🔹 ROTAS PÚBLICAS (navbar público)
  {
    path: '',
    component:  LayoutPublico,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'sobre', component: Sobre },
      { path: 'contato', component: Contato },
      { path: 'loja', component: Loja },
      { path: 'produto-info', component: ProdutoInfo },
      { path: 'login', component: Login },
      { path: 'cadastro', component: Cadastro },
    ]
  },

  // 🔹 ROTAS CLIENTE (navbar cliente)
  {
    path: '',
    component: LayoutCliente,
    children: [
      { path: 'areaCliente', component: AreaCliente },
      { path: 'carrinhoCompras', component: CarrinhoCompras },
      // outras páginas exclusivas do cliente
    ]
  },

  // 🔹 ROTAS ADM (navbar adm)
  {
    path: 'areaAdm',
    component: LayoutAdm,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./area-adm/area-adm-module').then(m => m.AreaAdmModule)
      }
    ]
  },

  // 🔹 ROTAS SEM LAYOUT ALGUM
  { path: 'loginAdm', component: LoginAdm },

];
