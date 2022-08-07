import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { SummaryCardsComponent } from './components/summary-cards/summary-cards.component';
import { TopCountriesComponent } from './components/top-countries/top-countries.component';


@NgModule({
  declarations: [
    SummaryPageComponent,
    SummaryCardsComponent,
    TopCountriesComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
