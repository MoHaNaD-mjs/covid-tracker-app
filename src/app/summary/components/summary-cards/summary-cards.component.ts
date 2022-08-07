import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.css']
})
export class SummaryCardsComponent implements OnInit , OnChanges{
@Input() covidData:any;
summaryData:any ={};
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
      this.summaryData =this.covidData.Global;
  }

}
