import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterZipCodeComponent } from './enter-zip-code.component';

describe('EnterZipCodeComponent', () => {
  let component: EnterZipCodeComponent;
  let fixture: ComponentFixture<EnterZipCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterZipCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterZipCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
