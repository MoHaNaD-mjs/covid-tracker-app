import { DataService } from '../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  covidData:any={};
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getSummaryData()
    .subscribe(
      (data:any)=>{
        this.covidData=data;
        console.log('summary Data',this.covidData);
      }
    );
  }

}
