import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  countries =new Subject();

  constructor() { }


  setCountris(countries: any ){
    this.countries.next(countries);
  }
}
