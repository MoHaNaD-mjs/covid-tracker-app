import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSummaryData() {
    return this.http.get('https://api.covid19api.com/summary');
  }
}
