import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionalSecretariatSelectComponent } from './divisional-secretariat-select.component';

describe('DivisionalSecretariatSelectComponent', () => {
  let component: DivisionalSecretariatSelectComponent;
  let fixture: ComponentFixture<DivisionalSecretariatSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionalSecretariatSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionalSecretariatSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
