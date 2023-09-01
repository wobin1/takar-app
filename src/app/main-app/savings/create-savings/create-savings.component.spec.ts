import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSavingsComponent } from './create-savings.component';

describe('CreateSavingsComponent', () => {
  let component: CreateSavingsComponent;
  let fixture: ComponentFixture<CreateSavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSavingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
