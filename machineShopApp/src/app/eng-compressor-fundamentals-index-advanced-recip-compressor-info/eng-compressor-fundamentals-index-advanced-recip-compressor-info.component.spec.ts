import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ENGCompressorFundamentalsIndexAdvancedRecipCompressorInfoComponent } from './eng-compressor-fundamentals-index-advanced-recip-compressor-info.component';

describe('ENGCompressorFundamentalsIndexAdvancedRecipCompressorInfoComponent', () => {
  let component: ENGCompressorFundamentalsIndexAdvancedRecipCompressorInfoComponent;
  let fixture: ComponentFixture<ENGCompressorFundamentalsIndexAdvancedRecipCompressorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ENGCompressorFundamentalsIndexAdvancedRecipCompressorInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ENGCompressorFundamentalsIndexAdvancedRecipCompressorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
