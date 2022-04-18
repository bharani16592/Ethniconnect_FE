import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditprofileComponent } from './chefeditprofile.component';

describe('ChefeditprofileComponent', () => {
  let component: ChefeditprofileComponent;
  let fixture: ComponentFixture<ChefeditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefeditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
