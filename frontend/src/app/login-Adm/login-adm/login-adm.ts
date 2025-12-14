import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidarService } from '../../login/services/validar-service';
import { ErrorDialog } from '../../Area-Adm/shared/components/error-dialog/error-dialog';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { ValidarAdm } from '../service/validar-adm';

@Component({
  selector: 'app-login-adm',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,MatDialogModule],
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

  constructor(
    private router: Router,
    private adminService: ValidarAdm,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loginForm.reset();
    this.hideSenha.set(true);
  }

  // Alterna visibilidade da senha
  toggleSenhaVisibility(event: Event) {
    event.preventDefault();
    this.hideSenha.set(!this.hideSenha());
  }

  // Retorna estado da senha (true = escondida)
  hide() {
    return this.hideSenha();
  }

  onSubmit() {
  if (!this.loginForm.valid) {
    this.loginForm.markAllAsTouched();
    this.dialog.open(ErrorDialog, { data: 'Formulário inválido' });
    return;
  }

  const { email, senha } = this.loginForm.value;

  this.adminService.login(email, senha).subscribe({
    next: (valido) => {
      // Aqui o backend retornou 200 OK
      this.loginForm.reset();
      this.hideSenha.set(true);
      this.router.navigateByUrl('/areaAdm', { replaceUrl: true });
    },
    error: (err) => {
      // Aqui o backend retornou 400 ou outro erro
      let msg = 'senha ou email incorretos!';
      if (err.error?.erro) {
        msg = err.error.erro; // pega a mensagem do backend
      }
      this.dialog.open(ErrorDialog, { data: msg });

      // Reset do formulário e da senha
      this.loginForm.reset();
      this.hideSenha.set(true);
    }
  });
}

}

