import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyReportThreeComponent } from './monthly-report-three.component';

describe('MonthlyReportThreeComponent', () => {
  let component: MonthlyReportThreeComponent;
  let fixture: ComponentFixture<MonthlyReportThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyReportThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyReportThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
