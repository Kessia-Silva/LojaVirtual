import { Component, OnInit} from '@angular/core';
import { AsyncPipe, NgFor, NgIf  } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GeneroMusical } from '../../genero-musical/model/genero-musical';
import { GeneroMusicalService } from '../../genero-musical/services/genero-musical-service';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto-model';
import { FormsModule } from '@angular/forms';
import { NavbarInternoAdm } from "../../../navbar/navbar-interno-adm/navbar-interno-adm";
import { ProdutoService } from '../services/produto-service';

@Component({
  selector: 'app-cadastrar-produto',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule,
    MatIconModule, AsyncPipe, NgFor,  NgIf, FormsModule, NavbarInternoAdm],
  templateUrl: './cadastrar-produto.html',
  styleUrl: './cadastrar-produto.scss',
})
export class CadastrarProduto implements OnInit{

 generos$!: Observable<GeneroMusical[]>;
  produto: Produto = {
    id: '',
    nome: '',
    preco: null as any,
    descricao: '',
    estoque: null as any,
    generoMusical: { id: '', name: '' },
    imagemUrl: ''
  };

  imagemSelecionada: File | null = null;
  imagemPreview: string | null = null;

  constructor(private generoService: GeneroMusicalService,
              private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.generos$ = this.generoService.getAll();
  }

  onSalvarProduto() {
   // Validação dos campos obrigatórios
  if (
    !this.produto.nome?.trim() ||                       // nome vazio
    !this.produto.preco || this.produto.preco <= 0 ||   // preço inválido
    !this.produto.estoque || this.produto.estoque < 0 ||// estoque inválido
    !this.produto.generoMusical?.id ||                  // gênero não selecionado
    !this.imagemSelecionada                             // imagem não escolhida
  ) {
    alert('Preencha todos os campos obrigatórios corretamente!');
    return;
  }

  // Formata nome
  this.produto.nome = this.capitalizeFirstLetter(this.produto.nome);

  // Salva
  this.produtoService.addProduto(this.produto);
  alert('Produto salvo com sucesso!');

  // Resetar formulário
  this.produto = {
    id: '',
    nome: '',
    preco: null as any,
    descricao: '',
    estoque: null as any,
    generoMusical: { id: '', name: '' },
    imagemUrl: ''
  };

  this.imagemPreview = null;
  this.imagemSelecionada = null;
}

  onSelecionarGenero(genero: GeneroMusical) {
    this.produto.generoMusical = genero;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imagemSelecionada = input.files[0];
      this.produto.imagemUrl = URL.createObjectURL(this.imagemSelecionada);

      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPreview = reader.result as string;
      };
      reader.readAsDataURL(this.imagemSelecionada);
    }
  }

  // Função para inicial maiúscula
capitalizeFirstLetter(value: string): string {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
}

}
