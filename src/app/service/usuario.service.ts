import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private apiServiceUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  
  public getUsuario(): Observable <usuario>{
      return this.http.get<usuario>(`${this.apiServiceUrl}/usuario/1`);
    }

    public updateUsuario(usuario:usuario):Observable<usuario> {

      return this.http.put<usuario>(`${this.apiServiceUrl}/usuario/update`,usuario);

    }

  }
