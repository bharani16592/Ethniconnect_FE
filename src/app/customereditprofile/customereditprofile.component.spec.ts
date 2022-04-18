import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomereditprofileComponent } from './customereditprofile.component';

describe('CustomereditprofileComponent', () => {
  let component: CustomereditprofileComponent;
  let fixture: ComponentFixture<CustomereditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomereditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomereditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
