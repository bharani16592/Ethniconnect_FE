import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefprofilesetupComponent } from './chefprofilesetup.component';

describe('ChefprofilesetupComponent', () => {
  let component: ChefprofilesetupComponent;
  let fixture: ComponentFixture<ChefprofilesetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefprofilesetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefprofilesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
