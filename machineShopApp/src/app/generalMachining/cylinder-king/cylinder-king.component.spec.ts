import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderKingComponent } from './cylinder-king.component';

describe('CylinderKingComponent', () => {
  let component: CylinderKingComponent;
  let fixture: ComponentFixture<CylinderKingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderKingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderKingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
