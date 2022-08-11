import { DataService } from './../../../shared/services/data.service';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css'],
})
export class CountryChartComponent implements OnInit, OnChanges {
  @Input() country: string = 'India';

  barCharData: ChartDataset[] = [
    {
      data: [],
      label: 'Confirmed Cases',
    },
  ];
  barChartLabels: string[] = [];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.getCountryData();
  }

  getCountryData() {
    this.dataService
      .getCountryDataByDate(
        this.country,
        '2020-03-01T00:00Z&to=2022-1-01T00:00:00Z'
      )
      .subscribe((response: any) => {
        this.barCharData[0].data = response.map((obj: any) => obj['Cases']);
        this.barChartLabels = response.map((obj: any) =>
          obj['Date'].substring(0.10));
      }
      );
  }
}
