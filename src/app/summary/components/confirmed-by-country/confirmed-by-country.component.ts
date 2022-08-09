import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmed-by-country',
  templateUrl: './confirmed-by-country.component.html',
  styleUrls: ['./confirmed-by-country.component.css']
})
export class ConfirmedByCountryComponent implements OnInit {

  @Output() country =new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  passCountryData(searchTerm:string){
    this.country.emit(searchTerm);
  }
}
