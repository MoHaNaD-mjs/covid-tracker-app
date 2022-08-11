import { DataService } from './../../../shared/services/data.service';
import { ChartOptions } from 'chart.js';
import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts/highmaps';
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';

@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.css'],
})
export class LivePageComponent implements OnInit {
  liveData: any[] = [];

  constructor(private dataService: DataService) {}

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  /**
 * Chart options of live page component
/**
 * Chart options of live page component
 */
  chartOptions: Highcharts.Options | any = {
    chart: {
      map: worldMap,
    },
    title: {
      text: 'COVID-19 world Data',
    },
    subtitle: {
      text: 'Confirmed Cases Live',
    },
    mapNavigation: {
      enbled: true,
      buttonOptions: {
        alignTo: 'spacinBox',
      },
    },
    legend: {
      enabled: true,
    },
    colorAxix: {
      min: 0,
    },
    series: [
      {
        type: 'map',
        name: 'COVID-19 Data',
        states: {
          hover: {
            color: '#dc3545',
          },
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
        allAreas: false,
        data: [


        ]
      },
    ],
  };

  ngOnInit(): void {
    this.dataService.getSummaryData().subscribe(
      (data: any) => {
        this.liveData = data.Countries.map((country: any) => [
          country.CountryCode.toaLowerCase(),
          country.TotalConfirmed,
        ]);
        this.chartOptions.series[0].data = this.liveData;
        this.Highcharts.mapChart('container', this.chartOptions);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
