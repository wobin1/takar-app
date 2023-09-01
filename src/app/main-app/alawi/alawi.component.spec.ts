import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlawiComponent } from './alawi.component';

describe('AlawiComponent', () => {
  let component: AlawiComponent;
  let fixture: ComponentFixture<AlawiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlawiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlawiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
