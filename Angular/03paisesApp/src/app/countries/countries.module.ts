import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountryComponent } from './pages/for-country/for-country.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { FormsModule } from '@angular/forms';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountryComponent,
    ForRegionComponent,
    SeeCountryComponent,
    FormSearchComponent,
    CountriesTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
