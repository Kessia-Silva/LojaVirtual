import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-gerenciar-genero-musical',
  imports: [FormsModule, MatFormFieldModule, MatInputModule,
            MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './gerenciar-genero-musical.html',
  styleUrl: './gerenciar-genero-musical.scss',
})
export class GerenciarGeneroMusical {

}
