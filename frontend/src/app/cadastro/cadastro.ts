import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {FormControl, Validators, FormsModule,
ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { CadastroService } from './services/cadastro-service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router, RouterLink } from '@angular/router';
import { Alerts } from '../Area-Adm/shared/components/alerts/alerts';
import { MatDialog } from '@angular/material/dialog';
import { ValidarService } from '../login/services/validar-service';



@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,  MatIcon, CommonModule, RouterLink   ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})
export class Cadastro {

  hide = signal(true);
  clickEvent(event: MouseEvent) {
  this.hide.set(!this.hide());
  event.stopPropagation();
}


cadastroForm: FormGroup;
constructor( private fb: FormBuilder, private snackBar: MatSnackBar, private dialog: MatDialog, private loginUser: ValidarService,
    private router: Router, private cadastroService: CadastroService
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      endereco: ['', Validators.required]
    });
  }

onSubmit() {
    if (this.cadastroForm.valid) {
      this.cadastroService.cadastrar(this.cadastroForm.value).subscribe({
        next: () => {
          // Abre modal de sucesso
          const dialogRef = this.dialog.open(Alerts, {
            data: 'Cadastro realizado com sucesso!'
          });

          // Fecha modal e redireciona após clique
          dialogRef.afterClosed().subscribe(() => {
            this.fazerlogin()
            this.router.navigate(['/loja']);
          });
        },
        error: () => {
          // Modal de erro
          this.dialog.open(Alerts, {
            data: 'Email ja cadastrado! Tente outro.'
          });
        }
      });
    } else {
      // Modal de validação
      this.dialog.open(Alerts, {
        data: 'Erro: Preencha todos os campos corretamente!'
      });
    }
  }

  fazerlogin() {
  const email = this.cadastroForm.get('email')?.value;
  const senha = this.cadastroForm.get('senha')?.value;

  if (!email || !senha) return; // segurança

  this.loginUser.login(email, senha).subscribe({
    next: (logado: boolean) => {
      if (!logado) {
        this.dialog.open(Alerts, { data: 'Não foi possível logar automaticamente.' });
      }
      // se logado, já estamos redirecionando no afterClosed do modal
    },
    error: () => {
      this.dialog.open(Alerts, { data: 'Erro ao tentar logar. Tente novamente.' });
    }
  });
}

}
