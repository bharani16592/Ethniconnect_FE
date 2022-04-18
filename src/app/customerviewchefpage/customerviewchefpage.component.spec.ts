import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerviewchefpageComponent } from './customerviewchefpage.component';

describe('CustomerviewchefpageComponent', () => {
  let component: CustomerviewchefpageComponent;
  let fixture: ComponentFixture<CustomerviewchefpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerviewchefpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerviewchefpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
