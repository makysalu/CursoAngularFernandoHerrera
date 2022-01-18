import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styleUrls: ['./for-country.component.css'],
})
export class ForCountryComponent implements OnInit {
  error: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  term: string = '';
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {}

  getAllCountries(term: string) {
    this.error = false;
    this.countriesService.getAllCountriesByName(term).subscribe(
      (res) => {
        this.countries = res;
      },
      (error) => {
        this.error = true;
      }
    );
  }

  suggestions(term: string):void{
    this.term = term;
    
    this.error = false;
    this.countriesService.getAllCountriesByName(term)
    .subscribe(
      res => {this.suggestedCountries = res.splice(0,5)},
      err => this.suggestedCountries = []
      );
    
  }
}
