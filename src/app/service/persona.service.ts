import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'http://localhost:8080/api/users/';

  constructor(private http: HttpClient) { }
  
  public getUsers(): Observable <users>{
      return this.http.get<users>(this.URL + '1')
    }
  }
