import { ExtraOptions, Routes } from '@angular/router';

import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Contato } from './contato/contato'

import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { AreaAdmModule } from './Area-Adm/areaAdm-module';

import { ProdutoInfo } from './produto-info/produto-info';

import { LoginAdm } from './login-Adm/login-adm/login-adm';
import { Loja } from './loja/loja';
import { CarrinhoCompras } from './Carrinho-compras/carrinho-compras';

import { LayoutPublico } from './layout-publico/layout-publico';
import { produtoResolver } from './resolvers/produto-resolver';
import { AuthGuard } from './Services/AuthUser-guard/auth-guard';
import { ProdutoResolver } from './resolvers/produto-id-resolver-resolver';
import { MinhaConta } from './Area-Cliente/minha-conta/minha-conta';
import { MeusPedidos } from './Area-Cliente/meus-pedidos/meus-pedidos';
import { carrinhoResolver } from './resolvers/carrinho-compras/carrinho-compras-resolver';
import { meusPedidosResolver } from './resolvers/meus-pedidos/meus-pedidos-resolver';
import { EditarMinhaConta } from './Area-Cliente/editar-minha-conta/editar-minha-conta';
import { AdminGuard } from './Services/AuthAdm-guard/admin-guard';
import { produtosRelacionadosResolver } from './resolvers/produtos-relacionados-resolver-resolver';
import { ProdutoAtivoGuard } from './Services/GuardProdutos/produto-ativo-guard';


export const routes: Routes = [

  // 🔹 ROTAS PÚBLICAS (navbar público)
  {
    path: '',
    component: LayoutPublico,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'sobre', component: Sobre },
      { path: 'contato', component: Contato },
      {
        path: 'loja',
        component: Loja,
        resolve: { produtos: produtoResolver }
      },
      /*
      {
  path: 'produto-info/:id',
  component: ProdutoInfo,
  resolve: { produto: ProdutoResolver }
},*/

{
  path: 'produto-info/:id',
  component: ProdutoInfo,
  resolve: {
    produto: ProdutoResolver,
    relacionados: produtosRelacionadosResolver
  },
  canActivate: [ProdutoAtivoGuard]
},
      { path: 'login', component: Login },
      { path: 'cadastro', component: Cadastro },
    ]
  },

  // 🔹 ROTAS ADM (navbar adm)
  {
    path: 'areaAdm',
    loadChildren: () =>
      import('./Area-Adm/areaAdm-module').then(m => m.AreaAdmModule),
    canActivate: [AdminGuard]
  },

  // 🔹 ROTAS SEM LAYOUT
  { path: 'loginAdm', component: LoginAdm },


// 🔹 ROTAS CLIENTE (requer login)
{
  path: 'cliente',
  component: LayoutPublico, // você pode criar um layout específico se quiser
  canActivate: [AuthGuard],
  children: [
    { path: '', redirectTo: 'carrinho', pathMatch: 'full' },
    {path: 'carrinho',
  component: CarrinhoCompras,
  resolve: { carrinho: carrinhoResolver }},
    { path: 'minha-Conta', component: MinhaConta },
    { path: 'meus-pedidos', component: MeusPedidos,
      resolve: {
      pedidos: meusPedidosResolver
    }
     },
     { path: 'editar-minha-conta', component: EditarMinhaConta },
    // aqui você pode adicionar mais rotas da área do cliente, tipo pedidos, perfil etc.
  ]
},

];




