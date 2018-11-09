import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyReportFourComponent } from './monthly-report-four.component';

describe('MonthlyReportFourComponent', () => {
  let component: MonthlyReportFourComponent;
  let fixture: ComponentFixture<MonthlyReportFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyReportFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyReportFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
