import { Injectable } from '@angular/core';
import { Character } from '../main-page/Interfaces/character.interface';

@Injectable()
export class DbzService{
    private characters: Character[] = [{'name':'Krillin', 'power': 700}, {'name':'Goku', 'power':1500}, {'name':'Vegeta', 'power':1300}];
    
    get Characters(): Character[]{return this.characters}
    insertNewCharacter(newCharacter: Character): void{
        this.characters.push(newCharacter);
    }
}