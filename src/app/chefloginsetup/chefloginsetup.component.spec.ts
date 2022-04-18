import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefloginsetupComponent } from './chefloginsetup.component';

describe('ChefloginsetupComponent', () => {
  let component: ChefloginsetupComponent;
  let fixture: ComponentFixture<ChefloginsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefloginsetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefloginsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
