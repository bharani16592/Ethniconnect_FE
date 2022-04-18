import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerwitechefreviewComponent } from './customerwitechefreview.component';

describe('CustomerwitechefreviewComponent', () => {
  let component: CustomerwitechefreviewComponent;
  let fixture: ComponentFixture<CustomerwitechefreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerwitechefreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerwitechefreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
