import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForCountryComponent } from '../../../../../Angular De cero a experto - Fernando Herrera/Angular/03-paisesApp/src/app/countries/pages/for-country/for-country.component';
import { ForRegionComponent } from '../../../../../Angular De cero a experto - Fernando Herrera/Angular/03-paisesApp/src/app/countries/pages/for-region/for-region.component';
import { ForCapitalComponent } from '../../../../../Angular De cero a experto - Fernando Herrera/Angular/03-paisesApp/src/app/countries/pages/for-capital/for-capital.component';
import { SeeCountryComponent } from '../../../../../Angular De cero a experto - Fernando Herrera/Angular/03-paisesApp/src/app/countries/pages/see-country/see-country.component';

const routes: Routes = [
  {path: '', component: ForCountryComponent, pathMatch: 'full'},
  {path: 'region', component: ForRegionComponent},
  {path: 'capital', component: ForCapitalComponent},
  {path: 'country/:id', component: SeeCountryComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
