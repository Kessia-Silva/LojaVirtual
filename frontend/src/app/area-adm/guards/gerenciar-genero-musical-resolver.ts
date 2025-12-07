import { ResolveFn } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
 import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 import { Observable, of } from 'rxjs';
import { GeneroMusical } from '../produtos/gerenciar-genero-musical/model/genero-musical';
import { GerenciarGeneroMusicalService } from '../produtos/gerenciar-genero-musical/services/gerenciar-genero-musical-service';

@Injectable({
  providedIn: 'root'
 })

 export class CourseResolver {


/* Com o banco tirar depois
  constructor(private service: GerenciarGeneroMusicalService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GeneroMusical> {
    const id = route.params['id'];
    if (id) {
      return this.service.loadById(id).pipe(
        catchError(() => {
          // Se ocorrer erro, retorna um objeto vazio
          return of({ id: '', name: '' });
        })
      );
    }
    // Se não houver id, retorna objeto vazio para criar novo
    return of({ id: '', name: '' });
  } */

}
