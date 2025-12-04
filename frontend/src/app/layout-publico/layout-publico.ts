import { Component } from '@angular/core';
import { NavbarPublico } from "../navbar/navbar-publico/navbar-publico";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-publico',
  imports: [NavbarPublico, RouterOutlet ],
  templateUrl: './layout-publico.html',
  styleUrl: './layout-publico.scss',
})
export class LayoutPublico {

}
