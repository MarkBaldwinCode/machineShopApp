import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyInfoComponent } from './daily-info.component';

describe('DailyInfoComponent', () => {
  let component: DailyInfoComponent;
  let fixture: ComponentFixture<DailyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
