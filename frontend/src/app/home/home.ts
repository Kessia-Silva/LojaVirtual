import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LojaRoutingModule } from "../loja/loja-routing-module";

@Component({
  selector: 'app-home',
  imports: [MatIconModule, LojaRoutingModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
