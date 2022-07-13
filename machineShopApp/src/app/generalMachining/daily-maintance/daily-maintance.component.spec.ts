import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMaintanceComponent } from './daily-maintance.component';

describe('DailyMaintanceComponent', () => {
  let component: DailyMaintanceComponent;
  let fixture: ComponentFixture<DailyMaintanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyMaintanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyMaintanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
