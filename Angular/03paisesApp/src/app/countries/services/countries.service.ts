import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  params: HttpParams = new HttpParams()
  .set('fields', 'name,capital,population,flags,ccn3')
  private url: string = 'https://restcountries.com/v3';

  constructor(private http: HttpClient) { }

  getAllCountriesByName(name: string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}/name/${name}`, {params: this.params});
  }

  getAllCountriesByRegion(region: string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}/region/${region}`, {params: this.params});
  }

  getAllCountriesByCapital(capital: string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}/capital/${capital}`, {params: this.params});
  }

  getCountryById(id:number):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}/alpha/${id}`);
  }
}
