import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar-publico',
  imports: [MatToolbarModule, MatButtonModule,
    MatIconModule, MatMenuModule, RouterModule],
  templateUrl: './navbar-publico.html',
  styleUrl: './navbar-publico.scss',
})
export class NavbarPublico {

}
