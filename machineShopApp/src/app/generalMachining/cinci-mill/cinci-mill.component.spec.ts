import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinciMillComponent } from './cinci-mill.component';

describe('CinciMillComponent', () => {
  let component: CinciMillComponent;
  let fixture: ComponentFixture<CinciMillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinciMillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinciMillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
