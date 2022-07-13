import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadwellLatheComponent } from './leadwell-lathe.component';

describe('LeadwellLatheComponent', () => {
  let component: LeadwellLatheComponent;
  let fixture: ComponentFixture<LeadwellLatheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadwellLatheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadwellLatheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
