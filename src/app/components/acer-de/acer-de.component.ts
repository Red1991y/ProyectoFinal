import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-acer-de',
  templateUrl: './acer-de.component.html',
  styleUrls: ['./acer-de.component.css']
})
export class AcerDeComponent implements OnInit {
  usuario: usuario = new usuario("","","","","","");

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(data => {this.usuario = data})
  }
  
}
