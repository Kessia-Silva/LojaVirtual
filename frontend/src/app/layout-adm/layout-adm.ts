import { Component } from '@angular/core';
import { NavbarAdm } from "../navbar/navbar-adm/navbar-adm";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout-adm',
  imports: [NavbarAdm, RouterOutlet],
  templateUrl: './layout-adm.html',
  styleUrl: './layout-adm.scss',
})
export class LayoutAdm {

}
