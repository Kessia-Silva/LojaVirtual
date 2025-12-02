import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Contato } from './contato/contato'

import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { AreaAdm } from './Area-Adm/area-adm/area-adm';
import { AreaCliente } from './Area-Cliente/area-cliente/area-cliente';

import { ProdutoInfo } from './produto-info/produto-info/produto-info';

import { LoginAdm } from './login-Adm/login-adm/login-adm';
import { Loja } from './loja/loja';
import { CarrinhoCompras } from './Carrinho-compras/carrinho-compras';



export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'contato', component: Contato},
  {path:'loja', component: Loja},
  {path: 'login', component: Login},
  {path: 'cadastro', component: Cadastro},
  {path: 'areaCliente', component: AreaCliente},
  {path: 'areaAdm', component: AreaAdm},
  {path: 'produto-info', component: ProdutoInfo},
  {path: 'carrinhoCompras', component: CarrinhoCompras},
  {path: 'loginAdm', component: LoginAdm}
];
