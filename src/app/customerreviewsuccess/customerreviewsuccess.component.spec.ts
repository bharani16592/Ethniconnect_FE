import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerreviewsuccessComponent } from './customerreviewsuccess.component';

describe('CustomerreviewsuccessComponent', () => {
  let component: CustomerreviewsuccessComponent;
  let fixture: ComponentFixture<CustomerreviewsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerreviewsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerreviewsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
