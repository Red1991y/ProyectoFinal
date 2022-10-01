import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acer-de',
  templateUrl: './acer-de.component.html',
  styleUrls: ['./acer-de.component.css']
})
export class AcerDeComponent implements OnInit {
  users: users = new users("","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getUsers().subscribe(data => {this.users = data})
  }

}
