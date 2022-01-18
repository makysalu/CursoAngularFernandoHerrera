import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  nombre: string = 'Ironman';
  edad: number = 45;
  constructor() { }

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  ngOnInit(): void {
  }

  obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad():void{
    this.edad = 18;
  }
}
