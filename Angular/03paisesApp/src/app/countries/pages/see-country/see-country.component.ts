import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country, NativeName } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {
  constructor(private  activatedRoute: ActivatedRoute, private countriesService: CountriesService, private route: Router){ }
  country!: Country;

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.getCountryById(id))
    )
    .subscribe(
      res => this.country=res[0],
      error => this.route.navigate([''])
      
    );
  }

}
