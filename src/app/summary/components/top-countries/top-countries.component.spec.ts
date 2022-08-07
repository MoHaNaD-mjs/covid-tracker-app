import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCountriesComponent } from './top-countries.component';

describe('TopCountriesComponent', () => {
  let component: TopCountriesComponent;
  let fixture: ComponentFixture<TopCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
