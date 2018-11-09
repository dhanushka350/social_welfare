import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationOfProvisionsComponent } from './allocation-of-provisions.component';

describe('AllocationOfProvisionsComponent', () => {
  let component: AllocationOfProvisionsComponent;
  let fixture: ComponentFixture<AllocationOfProvisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationOfProvisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationOfProvisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
