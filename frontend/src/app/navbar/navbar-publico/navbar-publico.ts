import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatMenuModule} from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { ValidarService } from '../../login/services/validar-service';
import { Alerts } from '../../shared/alerts/alerts';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-navbar-publico',
  imports: [MatToolbarModule, MatButtonModule,
    MatIconModule, MatMenuModule, RouterModule,CommonModule],
  templateUrl: './navbar-publico.html',
  styleUrl: './navbar-publico.scss',
})
export class NavbarPublico {
  menuAberto: boolean = false;
  constructor(public validarService: ValidarService,private dialog: MatDialog,
  private router: Router) {}

  logout() {
  // desloga
  this.validarService.logout();

  // abre alerta
  const dialogRef = this.dialog.open(Alerts, {
    data: 'Você foi deslogado com sucesso.'
  });

  // quando fechar o alerta, redireciona
  dialogRef.afterClosed().subscribe(() => {
    this.router.navigate(['/home']);
  });
}




}
