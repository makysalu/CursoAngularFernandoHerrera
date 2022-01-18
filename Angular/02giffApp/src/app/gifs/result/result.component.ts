import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../Interfaces/gifs.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  get gifs():Gif[]{
    return this.gifsService.gifs;
  }
  ngOnInit(): void {
  }

}
