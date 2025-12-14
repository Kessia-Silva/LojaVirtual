import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatMenuModule} from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { ValidarService } from '../../login/services/validar-service';


@Component({
  selector: 'app-navbar-publico',
  imports: [MatToolbarModule, MatButtonModule,
    MatIconModule, MatMenuModule, RouterModule,CommonModule],
  templateUrl: './navbar-publico.html',
  styleUrl: './navbar-publico.scss',
})
export class NavbarPublico {
  menuAberto: boolean = false;
  constructor(public validarService: ValidarService) {}

  logout(){
    this.validarService.logout()
  }



}
