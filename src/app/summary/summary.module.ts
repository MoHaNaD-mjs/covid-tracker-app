import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { SummaryCardsComponent } from './components/summary-cards/summary-cards.component';
import { TopCountriesComponent } from './components/top-countries/top-countries.component';
import { ConfirmedByCountryComponent } from './components/confirmed-by-country/confirmed-by-country.component';
import { CountryChartComponent } from './components/country-chart/country-chart.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    SummaryPageComponent,
    SummaryCardsComponent,
    TopCountriesComponent,
    ConfirmedByCountryComponent,
    CountryChartComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    SharedModule,
    NgChartsModule
  ]
})
export class SummaryModule { }
