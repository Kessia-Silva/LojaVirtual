import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-area-adm',
  imports: [MatIconModule,MatButtonModule, RouterModule ],
  templateUrl: './area-adm.html',
  styleUrl: './area-adm.scss',
})
export class AreaAdm {

}
