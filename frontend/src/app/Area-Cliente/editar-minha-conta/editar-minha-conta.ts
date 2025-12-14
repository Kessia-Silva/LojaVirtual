import { Component, OnInit, signal } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidarService } from '../../login/services/validar-service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from '../Services/cliente/cliente-service';
import { MatIcon } from "@angular/material/icon";
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-editar-minha-conta',
  imports: [ReactiveFormsModule, MatIcon,CommonModule],
  templateUrl: './editar-minha-conta.html',
  styleUrl: './editar-minha-conta.scss',
})
export class EditarMinhaConta implements OnInit{
  contaForm: FormGroup;

  hideSenha: boolean = true;

  constructor(
    private usuarioService: ClienteService,
    private snack: MatSnackBar,
    private router: Router,
  ) {
    this.contaForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.minLength(8)]),
      endereco:new FormControl('', [Validators.required]),

    });
  }

  ngOnInit() {
    const usuario = this.usuarioService.getUsuarioLogado();
    if(usuario){
      this.contaForm.patchValue({
        nome: usuario.nome,
        email: usuario.email
      });
    }
  }


toggleSenha() {
  this.hideSenha = !this.hideSenha;
}

  salvar() {
    if(this.contaForm.invalid){
      this.contaForm.markAllAsTouched();
      return;
    }

    this.usuarioService.atualizarConta(this.contaForm.value).subscribe({
      next: () => {
        this.snack.open('Conta atualizada com sucesso!', 'OK', { duration: 3000 });
      },
      error: (err) => {
        console.error(err);
        this.snack.open('Erro ao atualizar conta', 'OK', { duration: 3000 });
      }
    });
  }

  voltarParaMinhaConta() {
    this.router.navigate(['/cliente/minha-Conta']); // ajuste para a rota correta
   }
}
