import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedByCountryComponent } from './confirmed-by-country.component';

describe('ConfirmedByCountryComponent', () => {
  let component: ConfirmedByCountryComponent;
  let fixture: ComponentFixture<ConfirmedByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedByCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmedByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
