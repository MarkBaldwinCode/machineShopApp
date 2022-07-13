import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoriLatheComponent } from './mori-lathe.component';

describe('MoriLatheComponent', () => {
  let component: MoriLatheComponent;
  let fixture: ComponentFixture<MoriLatheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoriLatheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoriLatheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
