import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
  styleUrls: ['./for-capital.component.css']
})
export class ForCapitalComponent implements OnInit {

  term: string = '';
  error: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    
  }

  getAllCountries(term: string){
    this.term = term;
    this.error=false;
    this.countriesService.getAllCountriesByCapital(term)
    .subscribe(
      (res) => {
        this.countries =res;
      },
      (error) => {
        this.error=true
      }
    )    
  }

  suggestions(term: string):void{
    
    this.error = false;
    this.countriesService.getAllCountriesByCapital(term)
    .subscribe(
      res => {this.suggestedCountries = res.splice(0,5)},
      err => this.suggestedCountries = []
    );
    
  }
}
