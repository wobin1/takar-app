import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsDetailComponent } from './savings-detail.component';

describe('SavingsDetailComponent', () => {
  let component: SavingsDetailComponent;
  let fixture: ComponentFixture<SavingsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
