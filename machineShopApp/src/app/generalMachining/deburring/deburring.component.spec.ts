import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeburringComponent } from './deburring.component';

describe('DeburringComponent', () => {
  let component: DeburringComponent;
  let fixture: ComponentFixture<DeburringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeburringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeburringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
