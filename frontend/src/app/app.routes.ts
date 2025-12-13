import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Contato } from './contato/contato'

import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { AreaAdmModule } from './Area-Adm/areaAdm-module';
import { AreaCliente } from './Area-Cliente/homeCliente/area-cliente';

import { ProdutoInfo } from './produto-info/produto-info';

import { LoginAdm } from './login-Adm/login-adm/login-adm';
import { Loja } from './loja/loja';
import { CarrinhoCompras } from './Carrinho-compras/carrinho-compras';

import { LayoutPublico } from './layout-publico/layout-publico';
import { produtoResolver } from './resolvers/produto-resolver';
import { AuthGuard } from './Services/auth-guard';
import { ConfirmarPagamento } from './Area-Cliente/confirmar-pagamento/confirmar-pagamento';
import { ProdutoResolver } from './resolvers/produto-id-resolver-resolver';


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
      {path: 'confirmarPagamento', component: ConfirmarPagamento},
      {
        path: 'loja',
        component: Loja,
        resolve: { produtos: produtoResolver }
      },
      {
  path: 'produto-info/:id',
  component: ProdutoInfo,
  resolve: { produto: ProdutoResolver }
},
      { path: 'login', component: Login },
      { path: 'cadastro', component: Cadastro },
      { path: 'carrinho', component: CarrinhoCompras, canActivate: [AuthGuard]},
    ]
  },

  // 🔹 ROTAS ADM (navbar adm)
  {
    path: 'areaAdm',
    loadChildren: () =>
      import('./Area-Adm/areaAdm-module').then(m => m.AreaAdmModule)
  },

  // 🔹 ROTAS SEM LAYOUT
  { path: 'loginAdm', component: LoginAdm },

];

