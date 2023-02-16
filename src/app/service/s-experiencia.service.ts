import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Experiencia } from '../model/experiencia';


@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  url = environment.apiUrlExp;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `detail/${id}`)
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
  
}
