import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdharaLabhinReportComponent } from './adhara-labhin-report.component';

describe('AdharaLabhinReportComponent', () => {
  let component: AdharaLabhinReportComponent;
  let fixture: ComponentFixture<AdharaLabhinReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdharaLabhinReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdharaLabhinReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
