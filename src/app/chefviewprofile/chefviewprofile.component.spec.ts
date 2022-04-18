import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefviewprofileComponent } from './chefviewprofile.component';

describe('ChefviewprofileComponent', () => {
  let component: ChefviewprofileComponent;
  let fixture: ComponentFixture<ChefviewprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefviewprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefviewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
