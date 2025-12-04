import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink  } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule, RouterLink ],
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

      // Aqui você faria a verificação com o backend
      // Por enquanto vamos só mostrar no console
      console.log('Login solicitado com:', email, senha);

      // Redireciona para a home ou página de produtos
      this.router.navigate(['/']);
    } else {
      // Caso o formulário esteja inválido
      console.log('Formulário inválido');
      this.loginForm.markAllAsTouched();
    }
  }

}
