import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GramaNiladhariDivisionComponent } from './grama-niladhari-division.component';

describe('GramaNiladhariDivisionComponent', () => {
  let component: GramaNiladhariDivisionComponent;
  let fixture: ComponentFixture<GramaNiladhariDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GramaNiladhariDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GramaNiladhariDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
