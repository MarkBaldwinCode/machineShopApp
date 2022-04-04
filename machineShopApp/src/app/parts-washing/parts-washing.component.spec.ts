import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsWashingComponent } from './parts-washing.component';

describe('PartsWashingComponent', () => {
  let component: PartsWashingComponent;
  let fixture: ComponentFixture<PartsWashingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsWashingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
