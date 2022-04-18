import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouForOrderComponent } from './thank-you-for-order.component';

describe('ThankYouForOrderComponent', () => {
  let component: ThankYouForOrderComponent;
  let fixture: ComponentFixture<ThankYouForOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouForOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouForOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
