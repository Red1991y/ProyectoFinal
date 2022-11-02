import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/educacion.models';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

 edu: educacion[] = [];

  constructor(private educacionService : EducacionService) { }

  ngOnInit(): void {
    this.cargarEducacion();
    
  }
cargarEducacion(): void {
  this.educacionService.lista().subscribe(data => {this.edu = data;})
}
}