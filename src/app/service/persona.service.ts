import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personas } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'http://localhost:8080/personas';

  constructor(private http: HttpClient) { }
  
  public getPersonas(): Observable <personas>{
      return this.http.get<personas>(this.URL + '/1')
    }
  }
