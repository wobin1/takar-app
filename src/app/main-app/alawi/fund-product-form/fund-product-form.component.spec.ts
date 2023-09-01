import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundProductFormComponent } from './fund-product-form.component';

describe('FundProductFormComponent', () => {
  let component: FundProductFormComponent;
  let fixture: ComponentFixture<FundProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundProductFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
