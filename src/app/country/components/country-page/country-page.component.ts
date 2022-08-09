import { DataService } from './../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
covidData:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getSummaryData()
    .subscribe(
      (data:any)=>{
        this.covidData=data;
      }
    );
  }

  searchCountry(country:string ){
    const countries = this.covidData.Countries
    .filter(
      (c:any)=>c.Country.toLowerCase().includes(country.toLowerCase())
    );
    console.log('Countries ',countries);
  }


}
