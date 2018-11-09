import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyReportTwoComponent } from './monthly-report-two.component';

describe('MonthlyReportTwoComponent', () => {
  let component: MonthlyReportTwoComponent;
  let fixture: ComponentFixture<MonthlyReportTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyReportTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyReportTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
