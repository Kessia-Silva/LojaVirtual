import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, delay, first, tap } from 'rxjs';
import { GeneroMusical } from '../../../models/generoMusical-models';


@Injectable({
  providedIn: 'root',
})
export class GeneroMusicalService {

private generos: GeneroMusical[] = [
  { id: 1, nome: 'Pop' },
  { id: 2, nome: 'Rock' },
  { id: 3, nome: 'MPB' },
  { id: 4, nome: 'K-pop' },
  { id: 5, nome: 'Sertanejo' },
  { id: 6, nome: 'Worship' },
  { id: 7, nome: 'Musical' },
  { id: 8, nome: 'Olodum' },
  { id: 9, nome: 'Anime / OST' },
  { id: 10, nome: 'Reggae' }
];


  private generosSubject = new BehaviorSubject<GeneroMusical[]>([...this.generos]);

  constructor() {}

  // Observable público
  getAll(): Observable<GeneroMusical[]> {
    return this.generosSubject.asObservable();
  }

  //Ana alterou de string para converter em number
  add(genero: GeneroMusical) {
    const novoId = (Math.max(...this.generos.map(g => +g.id)) + 1);
    genero.id = novoId;
    this.generos.push(genero);
    this.generosSubject.next([...this.generos]); // clonar para disparar atualização
  }

  update(generoEditado: GeneroMusical) {
    const index = this.generos.findIndex(g => g.id === generoEditado.id);
    if (index >= 0) {
      this.generos[index] = generoEditado;
      this.generosSubject.next([...this.generos]);
    }
  }

  remove(id: number) {
    this.generos = this.generos.filter(g => g.id !== id);
    this.generosSubject.next([...this.generos]);
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

 /*

trocar com backend:
 getGeneros(): Observable<GeneroMusical[]> {
    return this.httpCliente.get<GeneroMusical[]>(this.API);
  } */

}
