import { SearchService } from './../../../shared/services/search.service';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit, OnChanges,OnDestroy {
  @Input() covidData: any;
  countries: any[] = [];

  subscription = new Subscription();

  constructor(private SearchService: SearchService) {}

  ngOnInit(): void {
    this.subscription = this.SearchService.getCountris().subscribe(
      (data: any) => {
        this.countries = data;
      }
    );
  }
  ngOnChanges(): void {
    this.countries = this.covidData?.Countries;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }
}
