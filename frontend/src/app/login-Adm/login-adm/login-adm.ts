import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-adm',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './login-adm.html',
  styleUrl: './login-adm.scss',
})
export class LoginAdm {
  // Formulário reativo
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)
    ])
  });

  // Controle da visibilidade da senha
  hideSenha = signal(true);

  constructor(private router: Router) { }

  // Função para alternar visibilidade da senha
  hide() {
    return this.hideSenha();
  }

  clickEvent(event: Event) {
    event.preventDefault();
    this.hideSenha.set(!this.hideSenha());
  }

  // Função chamada ao submeter o formulário
  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const senha = this.loginForm.value.senha;

      console.log('Login solicitado com:', email, senha);

      // Exemplo: navegar para outra página
      // this.router.navigate(['/areaAdm']);
    } else {
      console.log('Formulário inválido');
      this.loginForm.markAllAsTouched();
    }
  }


}
