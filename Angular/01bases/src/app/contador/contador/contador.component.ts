import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  title: string = 'Contador App';
  cont: number = 0;
  base: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  acumular(valor: number):void{
    this.cont += valor;
  }
}
