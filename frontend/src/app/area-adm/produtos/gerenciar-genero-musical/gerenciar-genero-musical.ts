import { Component, OnInit  } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GeneroMusical } from './model/genero-musical';
import { GerenciarGeneroMusicalService } from './services/gerenciar-genero-musical-service';

import { ErrorDialog } from '../../shared/components/error-dialog/error-dialog';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { ConfirmationDialog } from '../../shared/components/confirmation-dialog/confirmation-dialog';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-gerenciar-genero-musical',
  imports: [FormsModule, MatFormFieldModule, MatInputModule,
            MatButtonModule, MatIconModule, MatListModule,
            MatTableModule,AsyncPipe,
    NgFor,
    NgIf,],
    standalone: true,
  templateUrl: './gerenciar-genero-musical.html',
  styleUrl: './gerenciar-genero-musical.scss',
})
export class GerenciarGeneroMusical /*implements OnInit*/ {


private generos: GeneroMusical[] = [
    { id: '1', name: 'Pop' },
    { id: '2', name: 'Rock' },
    { id: '3', name: 'Axé' },
  ];

  generos$ = new BehaviorSubject<GeneroMusical[]>(this.generos);

  generoForm: GeneroMusical = { id: '', name: '' }; // formulário de adicionar/editar

  /** Adicionar ou editar */
  onSave() {
    if (this.generoForm.id) {
      // editar
      const index = this.generos.findIndex(g => g.id === this.generoForm.id);
      if (index > -1) {
        this.generos[index] = { ...this.generoForm };
      }
    } else {
      // adicionar
      const novoId = (Math.max(...this.generos.map(g => +g.id)) + 1).toString();
      this.generos.push({ ...this.generoForm, id: novoId });
    }
    this.generos$.next([...this.generos]);
    this.onCancel();
  }

  /** Editar */
  onEdit(genero: GeneroMusical) {
    this.generoForm = { ...genero };
  }

  /** Remover */
  onRemove(id: string) {
    this.generos = this.generos.filter(g => g.id !== id);
    this.generos$.next([...this.generos]);
  }

  /** Cancelar edição */
  onCancel() {
    this.generoForm = { id: '', name: '' };
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
}
