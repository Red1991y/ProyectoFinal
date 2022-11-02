import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { experiencia } from '../model/experiencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL='http://localhost:8080/experiencia/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable <experiencia[]> {
    return this.httpClient.get<experiencia[]> (this.URL+ 'lista');
  }
}