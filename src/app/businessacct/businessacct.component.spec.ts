import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessacctComponent } from './businessacct.component';

describe('BusinessacctComponent', () => {
  let component: BusinessacctComponent;
  let fixture: ComponentFixture<BusinessacctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessacctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessacctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
