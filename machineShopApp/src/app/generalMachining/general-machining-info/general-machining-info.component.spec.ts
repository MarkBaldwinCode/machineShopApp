import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMachiningInfoComponent } from './general-machining-info.component';

describe('GeneralMachiningInfoComponent', () => {
  let component: GeneralMachiningInfoComponent;
  let fixture: ComponentFixture<GeneralMachiningInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralMachiningInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMachiningInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
