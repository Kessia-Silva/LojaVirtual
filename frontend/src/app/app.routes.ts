import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Contato } from './contato/contato'

import {LojaModule} from './loja/loja-module'

import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';



export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'contato', component: Contato},
  { path: 'loja',
        loadChildren: () => import('./loja/loja-module').then(m=>m.LojaModule)
  },
  {path: 'login', component: Login},
  {path: 'cadastro', component: Cadastro}
];
