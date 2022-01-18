import { Component, OnInit } from '@angular/core';
import { Character } from '../Interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  constructor(private dbzService: DbzService) { }
  
  get characters (): Character[]{
    return this.dbzService.Characters;
  }


  ngOnInit(): void {
  }

}
