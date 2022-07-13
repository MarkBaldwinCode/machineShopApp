import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodHoneComponent } from './rod-hone.component';

describe('RodHoneComponent', () => {
  let component: RodHoneComponent;
  let fixture: ComponentFixture<RodHoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodHoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodHoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
