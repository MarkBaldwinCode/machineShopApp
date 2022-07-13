import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringToolsComponent } from './measuring-tools.component';

describe('MeasuringToolsComponent', () => {
  let component: MeasuringToolsComponent;
  let fixture: ComponentFixture<MeasuringToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuringToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuringToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
