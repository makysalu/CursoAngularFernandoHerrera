import { Component, OnInit } from '@angular/core';
import { Character } from '../Interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {
  character: Character = {'name':'', 'power':0}

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  insertCharacter(event: any):void{
    event.preventDefault();
    if(this.character.name.trim().length != 0 && this.character.power != 0) this.dbzService.insertNewCharacter(this.character);    
    this.character =  {'name':'', 'power':0};
  }
}
