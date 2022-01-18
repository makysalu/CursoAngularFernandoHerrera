import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styleUrls: ['./for-region.component.css']
})
export class ForRegionComponent implements OnInit {
  error: boolean = false;
  countries: Country[] = [];
  activeRegion: string = '';
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
  }

  getAllCountries(region: string){
    this.activeRegion = region;
    this.error=false;
    this.countriesService.getAllCountriesByRegion(region)
    .subscribe(
      (res) => {        
        this.countries =res;
      },
      (error) => {
        this.error=true
      }
    )    
  }
}
