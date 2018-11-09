import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryOrganizationsInformationComponent } from './voluntary-organizations-information.component';

describe('VoluntaryOrganizationsInformationComponent', () => {
  let component: VoluntaryOrganizationsInformationComponent;
  let fixture: ComponentFixture<VoluntaryOrganizationsInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntaryOrganizationsInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntaryOrganizationsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
