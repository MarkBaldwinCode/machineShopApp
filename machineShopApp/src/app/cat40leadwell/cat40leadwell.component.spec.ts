import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat40leadwellComponent } from './cat40leadwell.component';

describe('Cat40leadwellComponent', () => {
  let component: Cat40leadwellComponent;
  let fixture: ComponentFixture<Cat40leadwellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cat40leadwellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat40leadwellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
