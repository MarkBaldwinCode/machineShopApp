import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotauthComponent } from './forgotauth.component';

describe('ForgotauthComponent', () => {
  let component: ForgotauthComponent;
  let fixture: ComponentFixture<ForgotauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
