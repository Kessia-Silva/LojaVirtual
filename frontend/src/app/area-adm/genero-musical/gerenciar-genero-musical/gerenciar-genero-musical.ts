import { Component, OnInit  } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GeneroMusicalService } from '../services/genero-musical-service';

import { ErrorDialog } from '../../shared/components/error-dialog/error-dialog';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { ConfirmationDialog } from '../../shared/components/confirmation-dialog/confirmation-dialog';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NavbarInternoAdm } from "../../../navbar/navbar-interno-adm/navbar-interno-adm";
import { GeneroMusical } from '../../../models/generoMusical-models';
@Component({
  selector: 'app-gerenciar-genero-musical',
  imports: [FormsModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule, MatListModule,
    MatTableModule, AsyncPipe,
    NgFor,
    NgIf, NavbarInternoAdm],
    standalone: true,
  templateUrl: './gerenciar-genero-musical.html',
  styleUrl: './gerenciar-genero-musical.scss',
})
export class GerenciarGeneroMusical implements OnInit {

  generos$!: Observable<GeneroMusical[]>;
  generoForm: GeneroMusical = { id: 0, nome: '' };

  constructor(private generoService: GeneroMusicalService) {}

  ngOnInit(): void {
    this.generos$ = this.generoService.getAll();
  }

  onSave() {
    const nome = this.generoForm.nome?.trim();
    if (!nome) return;

    if (this.generoForm.id) {
      this.generoService.update({ ...this.generoForm, nome: nome });
    } else {
      this.generoService.add({ id: 0, nome: nome });
    }
    this.onCancel();
  }

  onEdit(genero: GeneroMusical) {
    this.generoForm = { ...genero };
  }

  onRemove(id?: number) {
    if (!id) return;
    this.generoService.remove(id);
  }

  onCancel() {
    this.generoForm = { id: 0, nome: '' };
  }




 /* ########## LIBERAR QUANDO TIVER O BANCO ESSA PARTE ########################
   generos$: Observable<GeneroMusical[]> | null = null;

  constructor(
  private generoService: GerenciarGeneroMusicalService,
  public dialog: MatDialog,
  private router : Router,
  private route : ActivatedRoute,
  private snackBar: MatSnackBar

  ){
      this.refresh();

  }

   refresh(){
 this.generos$ = this.generoService.list()
 .pipe(
 catchError(error => {
 this.onError('Erro ao carregar a lista de generos musicais');
 return of([])
 })
 );
 }

onError(erroMsg: string){
  this.dialog.open(ErrorDialog, {
    data:erroMsg,
  })
}

  onAdd(){
 this.router.navigate(['new'], { relativeTo : this.route });
 }

 onEdit(genero: GeneroMusical) {
 this.router.navigate(['edit', genero.id], { relativeTo: this.route });
 }



  onRemove(genero: GeneroMusical) {
           const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: 'Excluir gênero: ${genero.name}?'
    });
    dialogRef.afterClosed().subscribe((result : boolean) => {
      if (result){
        this.generoService.remove(genero.id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Genero removido com sucesso', 'X', {
              duration : 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover genero.')
        );
      }
    });
  }
ngOnInit(): void {

  const genero: GeneroMusical = this.route.snapshot.data['genero'];
  console.log('Dados carregados do backend:', genero);
}
*/


// Função para inicial maiúscula
capitalizeFirstLetter(value: string): string {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
}
}
