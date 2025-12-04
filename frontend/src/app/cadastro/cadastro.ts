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
constructor( private fb: FormBuilder, private snackBar: MatSnackBar,
    private router: Router, private cadastroService: CadastroService
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });
  }

       onSubmit() {
    if (this.cadastroForm.valid) {
      this.cadastroService.cadastrar(this.cadastroForm.value)
        .subscribe({
          next: () => {
            this.snackBar.open('Cadastro realizado com sucesso!', 'Fechar', {
              duration: 3000,
              panelClass: ['snack-success']
            });
            setTimeout(() => this.router.navigate(['/home']), 3000);
          },
          error: () => {
            this.snackBar.open('Erro ao cadastrar. Tente novamente.', 'Fechar', {
              duration: 3000,
              panelClass: ['snack-error']
            });
          }
        });
    } else {
      this.snackBar.open('Erro: Preencha todos os campos corretamente!', 'Fechar', {
        duration: 3000,
        panelClass: ['snack-error']
      });
    }

}
}
