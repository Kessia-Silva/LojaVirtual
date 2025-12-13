import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, RouterModule } from '@angular/router';
import { Router, RouterLink } from '@angular/router';
import { NavbarAdm } from "../../navbar/navbar-adm/navbar-adm";
@Component({
  selector: 'app-area-adm',
  imports: [MatIconModule, MatButtonModule, RouterModule, RouterLink, NavbarAdm],
  templateUrl: './area-adm.html',
  styleUrl: './area-adm.scss',
})
export class AreaAdm implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // ⬅️ força ir para o topo
      }
    });
  }

}


