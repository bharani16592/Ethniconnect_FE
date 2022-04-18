import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chefsignup1Component } from './chefsignup1.component';

describe('Chefsignup1Component', () => {
  let component: Chefsignup1Component;
  let fixture: ComponentFixture<Chefsignup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chefsignup1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chefsignup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
