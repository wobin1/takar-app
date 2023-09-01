import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordVerificationComponent } from './forget-password-verification.component';

describe('ForgetPasswordVerificationComponent', () => {
  let component: ForgetPasswordVerificationComponent;
  let fixture: ComponentFixture<ForgetPasswordVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
