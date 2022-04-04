import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTopbtnComponent } from './scroll-topbtn.component';

describe('ScrollTopbtnComponent', () => {
  let component: ScrollTopbtnComponent;
  let fixture: ComponentFixture<ScrollTopbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollTopbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollTopbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
