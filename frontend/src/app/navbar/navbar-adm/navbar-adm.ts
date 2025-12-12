import { Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';
import { ValidarService } from '../../login-Adm/services/validar-service';

@Component({
  selector: 'app-navbar-adm',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './navbar-adm.html',
  styleUrl: './navbar-adm.scss',
})
export class NavbarAdm {

   constructor(private router: Router,private adminService: ValidarService) {}

  logout() {
    this.adminService.logout()
    this.router.navigate(['/']);
  }
}
