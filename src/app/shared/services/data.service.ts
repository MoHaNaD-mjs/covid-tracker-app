import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  apiUrl =environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSummaryData() {
    return this.http.get(`${this.apiUrl}/summary`);
  }

  getCountryDataByDate(country:string ,date:string){
    return this.http.get(`${this.apiUrl}/total/country/${country}/status/confirmed?${date}`);
  }
}
