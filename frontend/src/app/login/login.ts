import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink  } from '@angular/router';
import { ValidarService } from './services/validar-service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ErrorDialog } from '../shared/error-dialog/error-dialog';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule, RouterLink, MatDialogModule, MatButtonModule ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
   // Formulário reativo
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)])
  });

  // Controle da visibilidade da senha
  hideSenha = signal(true);

  constructor(private router: Router, private validarService: ValidarService, private dialog: MatDialog) { }

  // Função para alternar visibilidade da senha
  hide() {
    return this.hideSenha();
  }

  clickEvent(event: Event) {
    event.preventDefault();
    this.hideSenha.set(!this.hideSenha());
  }

 onSubmit() {
  if (this.loginForm.valid) {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    this.validarService.login(email, senha).subscribe({
      next: valido => {
        if (valido) {
          // login bem-sucedido
          this.loginForm.reset();
          this.hideSenha.set(true);
          this.router.navigate(['/']);
        } else {
          // login inválido
          this.dialog.open(ErrorDialog, {
            data: 'Email ou senha incorretos'
          });
          this.loginForm.reset();
          this.hideSenha.set(true);
        }
      },
      error: (err) => {
        // verifica primeiro se o servidor está fora do ar
        if (err.status === 0) {
          alert('Servidor fora do ar. Tente novamente mais tarde.');
          this.loginForm.reset();
          this.hideSenha.set(true);
          return; // sai da função para não executar o resto
        }

        // outros erros continuam sendo tratados pelo diálogo
        this.dialog.open(ErrorDialog, {
          data: err.error?.erro || 'Ocorreu um erro ao tentar logar'
        });
        this.loginForm.reset();
        this.hideSenha.set(true);
      }
    });

  } else {
    console.log('Formulário inválido');
    this.loginForm.markAllAsTouched();
  }
}





}
