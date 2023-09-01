import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTransactionsComponent } from './quick-transactions.component';

describe('QuickTransactionsComponent', () => {
  let component: QuickTransactionsComponent;
  let fixture: ComponentFixture<QuickTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
