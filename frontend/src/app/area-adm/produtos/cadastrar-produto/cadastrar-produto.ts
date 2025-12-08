import { Component, OnInit} from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GeneroMusical } from '../../genero-musical/model/genero-musical';
import { GeneroMusicalService } from '../../genero-musical/services/genero-musical-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastrar-produto',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule,
    MatIconModule, AsyncPipe, NgFor  ],
  templateUrl: './cadastrar-produto.html',
  styleUrl: './cadastrar-produto.scss',
})
export class CadastrarProduto implements OnInit{


  // garante que será inicializado no ngOnInit antes do template usar
  generos$!: Observable<GeneroMusical[]>;

  produto = {
    nome: '',
    preco: 0,
    genero: '',
    categoriaId: '', // armazena id do genero
    estoque: 0
  };

  constructor(private generoService: GeneroMusicalService) {}

  ngOnInit(): void {
    // usa o método do service — se o método não existir, chame this.generoService.generos$
    this.generos$ = this.generoService.getAll();
  }

  onSalvarProduto() {
    // pegar dados de this.produto e enviar ao backend ou mock
    console.log('Salvar produto', this.produto);
  }
}
