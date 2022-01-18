import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>; 

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  searchGifs(search: string): void{
    this.gifsService.searchGifs(search);
    this.txtSearch.nativeElement.value = '';
  }
}
