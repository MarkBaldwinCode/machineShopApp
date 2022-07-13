import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdAndTComponent } from './gd-and-t.component';

describe('GdAndTComponent', () => {
  let component: GdAndTComponent;
  let fixture: ComponentFixture<GdAndTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdAndTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdAndTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
