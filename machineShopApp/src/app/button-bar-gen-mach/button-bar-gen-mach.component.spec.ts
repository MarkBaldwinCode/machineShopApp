import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBarGenMachComponent } from './button-bar-gen-mach.component';

describe('ButtonBarGenMachComponent', () => {
  let component: ButtonBarGenMachComponent;
  let fixture: ComponentFixture<ButtonBarGenMachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBarGenMachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBarGenMachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
