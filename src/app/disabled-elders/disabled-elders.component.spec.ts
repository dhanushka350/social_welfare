import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledEldersComponent } from './disabled-elders.component';

describe('DisabledEldersComponent', () => {
  let component: DisabledEldersComponent;
  let fixture: ComponentFixture<DisabledEldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledEldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledEldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
