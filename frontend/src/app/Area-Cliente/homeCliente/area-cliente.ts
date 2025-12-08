import { Component } from '@angular/core';
import { NavbarCliente } from "../../navbar/navbar-cliente/navbar-cliente";
import { RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-area-cliente',
  imports: [NavbarCliente,  RouterOutlet ],
  templateUrl: './area-cliente.html',
  styleUrl: './area-cliente.scss',
})
export class AreaCliente {

}
