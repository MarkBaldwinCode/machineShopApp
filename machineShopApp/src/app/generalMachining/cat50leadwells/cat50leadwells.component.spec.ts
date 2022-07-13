import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat50leadwellsComponent } from './cat50leadwells.component';

describe('Cat50leadwellsComponent', () => {
  let component: Cat50leadwellsComponent;
  let fixture: ComponentFixture<Cat50leadwellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cat50leadwellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat50leadwellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
