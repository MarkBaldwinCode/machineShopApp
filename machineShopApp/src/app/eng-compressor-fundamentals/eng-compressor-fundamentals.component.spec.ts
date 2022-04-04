import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ENGCompressorFundamentalsComponent } from './eng-compressor-fundamentals.component';

describe('ENGCompressorFundamentalsComponent', () => {
  let component: ENGCompressorFundamentalsComponent;
  let fixture: ComponentFixture<ENGCompressorFundamentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ENGCompressorFundamentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ENGCompressorFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
