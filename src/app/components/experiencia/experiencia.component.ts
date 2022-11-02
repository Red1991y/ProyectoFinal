import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  expe: experiencia[] = [];

  constructor(private experienciaService : ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    
  }
  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(data => {this.expe = data;})
  }

}