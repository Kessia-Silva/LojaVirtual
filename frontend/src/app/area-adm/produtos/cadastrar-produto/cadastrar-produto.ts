import { Component, OnInit} from '@angular/core';
import { AsyncPipe, NgFor, NgIf  } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GeneroMusicalService } from '../../genero-musical/services/genero-musical-service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NavbarInternoAdm } from "../../../navbar/navbar-interno-adm/navbar-interno-adm";
import { ProdutoService } from '../services/produto-service';
import { GeneroMusical } from '../../../models/generoMusical-models';
import { Produto } from '../../../models/produto-model';

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
    id: 0,
    nome: '',
    preco: null as any,
    descricao: '',
    estoque: null as any,
    artista:'',
    generoMusical: { id: 0, nome: '' },
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
    !this.produto.nome?.trim() ||
    !this.produto.artista?.trim() ||                       // nome vazio
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
  this.produtoService.addProduto(this.produto).subscribe({
  next: (res) => {
    console.log('Produto criado no backend:', res);
    alert('Produto salvo com sucesso!');

    // Resetar formulário
    this.produto = {
      id: 0,
      nome: '',
      preco: null as any,
      descricao: '',
      estoque: null as any,
      artista:'',
      generoMusical: { id: 0, nome: '' },
      imagemUrl: ''
    };
    this.imagemPreview = null;
    this.imagemSelecionada = null;
  },
  error: (err) => {
    console.error('Erro ao salvar produto:', err);
    alert('Erro ao salvar produto. Veja o console.');
  }
});


  // Resetar formulário
  this.produto = {
    id: 0,
    nome: '',
    preco: null as any,
    descricao: '',
    estoque: null as any,
    artista:'',
    generoMusical: { id: 0, nome: '' },
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
      // Para enviar ao backend apenas o caminho, você pode definir:
      this.produto.imagemUrl = `assets/img/Novos-produtos/${this.imagemSelecionada.name}`;

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
