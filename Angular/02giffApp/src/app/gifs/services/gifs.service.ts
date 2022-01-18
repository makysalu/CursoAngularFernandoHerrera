import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGIFResponse, Gif } from '../Interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService { 
  
  private url: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'FQKchcWilsNyOzkudW0C2TiEBFa0FYH2';
  private limit: number = 20;

  private history: string[] = [];
  public gifs: Gif[] = [];

  constructor(private http: HttpClient) { 
    if(localStorage.getItem('history')){
      this.history = JSON.parse(localStorage.getItem('history')!);
    }

    if(localStorage.getItem('gifs')){
      this.gifs = JSON.parse(localStorage.getItem('gifs')!);
    }
  }

  get History():string[]{return [...this.history]}
  
  searchGifs(search : string):void{

    search = search.trim().toLowerCase();

    if(!this.History.includes(search) && search.trim().length != 0) 
    {
      this.history.unshift(search);
      this.history = this.history.splice(0,10);

      localStorage.setItem('history', JSON.stringify(this.History))
    }

    const params = new HttpParams().set('api_key', this.apiKey).set('q',search).set('limit', this.limit.toString());

    this.http.get<SearchGIFResponse>(`${this.url}/search`, {params})
    .subscribe(
      (res: SearchGIFResponse) => {
        this.gifs = res.data;     
        localStorage.setItem('gifs', JSON.stringify(this.gifs)) 
      }
    )
    
  }
}
