import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, delay, first, tap } from 'rxjs';
import { GeneroMusical } from '../model/genero-musical';
@Injectable({
  providedIn: 'root',
})
export class GerenciarGeneroMusicalService {

private generos: GeneroMusical[] = [
    { id: "1", name: 'Pop' },
    { id: "2", name: 'Eletronico' },
    { id: "3", name: 'Axé' }
  ];


generos$ = new BehaviorSubject<GeneroMusical[]>(this.generos);

getGeneros(): Observable<GeneroMusical[]> {
  return this.generos$.asObservable();
}

add(genero: GeneroMusical) {
  const novoId = (Math.max(...this.generos.map(g => +g.id)) + 1).toString();
  genero.id = novoId;
  this.generos.push(genero);
  this.generos$.next(this.generos);
}

edit(genero: GeneroMusical) {
  const index = this.generos.findIndex(g => g.id === genero.id);
  if (index > -1) {
    this.generos[index] = genero;
    this.generos$.next(this.generos);
  }
}

remove(id: string) {
  this.generos = this.generos.filter(g => g.id !== id);
  this.generos$.next(this.generos);
}
  /*  ############ LIBERAR QUANDO TIVER O BANCO ESSA PARTE ########################
  private readonly API = '/api/generos';

  constructor(private httpClient: HttpClient) {}

  list(){
    return this.httpClient.get<GeneroMusical[]>(this.API).pipe(
      first(),
      delay(10000),

    );
  }


 save(record: Partial<GeneroMusical>){
 if (record.id){
 return this.update(record);
 }else{
 return this.create(record);
 }
 }
 private create(record: Partial<GeneroMusical>){
 return this.httpClient.post<GeneroMusical>(this.API, record);
 }
 private update(record: Partial<GeneroMusical>){
 return this.httpClient.put<GeneroMusical>(`${this.API}/${record.id}`, record);
 }

 loadById(id:string){
  return this.httpClient.get<GeneroMusical>('${this.API}/${id}');
 }

  remove(id: string){
 return this.httpClient.delete(`${this.API}/${id}`);
 } */
}
