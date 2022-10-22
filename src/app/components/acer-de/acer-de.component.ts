import { Component, OnInit } from '@angular/core';
import { personas } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acer-de',
  templateUrl: './acer-de.component.html',
  styleUrls: ['./acer-de.component.css']
})
export class AcerDeComponent implements OnInit {
  personas: personas = new personas("","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(data => { this.personas = data})
  }
  
}
