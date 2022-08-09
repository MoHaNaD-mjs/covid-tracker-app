import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css'],
})
export class CountryChartComponent implements OnInit ,OnChanges{

  @Input() country:string ='India';

  barCharData: ChartDataset[] = [
    {
      data: [64, 45, 80],
    },
  ];
  barChartLabels: string[]=['USA','UK','KSA'];
  barChartOptions:ChartOptions={
    responsive:true
  }
  barChartType:ChartType='bar';
  barChartLegend=true;
  barChartPlugins=[];


  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
      console.log(this.country);
  }

}
