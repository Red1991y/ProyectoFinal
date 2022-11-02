import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proy: proyecto[] = [];

  constructor(private proyectoService : ProyectoService) { }

  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(data => {this.proy = data;})
  }
}
