import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.models';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL=' http://localhost:8080/educacion/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable <educacion[]> {
    return this.httpClient.get<educacion[]> (this.URL+ 'lista');
  }
}