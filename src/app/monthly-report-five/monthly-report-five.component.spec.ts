import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyReportFiveComponent } from './monthly-report-five.component';

describe('MonthlyReportFiveComponent', () => {
  let component: MonthlyReportFiveComponent;
  let fixture: ComponentFixture<MonthlyReportFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyReportFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyReportFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
