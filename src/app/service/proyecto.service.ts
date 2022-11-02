import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { proyecto } from '../model/proyecto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL='http://localhost:8080/proyecto/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable <proyecto[]> {
    return this.httpClient.get<proyecto[]> (this.URL+ 'lista');
  }
}
