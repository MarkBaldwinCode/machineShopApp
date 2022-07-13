import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoosanComponent } from './doosan.component';

describe('DoosanComponent', () => {
  let component: DoosanComponent;
  let fixture: ComponentFixture<DoosanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoosanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoosanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
