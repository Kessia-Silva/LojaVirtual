import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidarService } from '../services/validar-service';

@Component({
  selector: 'app-login-adm',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './login-adm.html',
  styleUrl: './login-adm.scss',
})
export class LoginAdm implements OnInit {


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

  // Função para alternar visibilidade da senha
  hide() {
    return this.hideSenha();
  }

  clickEvent(event: Event) {
    event.preventDefault();
    this.hideSenha.set(!this.hideSenha());
  }
  constructor(private router: Router, private adminService: ValidarService) { }
   ngOnInit() {
  this.loginForm.reset();
  this.hideSenha.set(true);
  }

onSubmit() {
  if (this.loginForm.valid) {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    const valido = this.adminService.validarLogin(email, senha);

    if (valido) {
      console.log('Login feito com sucesso!');
      this.loginForm.reset();      // 🔹 limpa o formulário
      this.hideSenha.set(true);    // 🔹 reset visibilidade da senha
      this.router.navigateByUrl('/areaAdm', { replaceUrl: true });
    } else {
      console.log('Email ou senha incorretos');
    }

  } else {
    console.log('Formulário inválido');
    this.loginForm.markAllAsTouched();
  }
}


}
